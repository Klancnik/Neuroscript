// Consonant Trigrams (CCC) Normative Database
// Based on Stuss et al. (1987) normative data
// Referenced in Strauss, Sherman & Spreen (2006) and Lezak et al.

window.CCCNorms = {
    // Stuss et al. (1987) normative data for Consonant Trigrams
    // Mean performance by delay interval (out of 15 letters)
    stussNorms: {
        delay0: { 
            mean: 14.2, 
            sd: 1.1, 
            range: [13, 15],
            description: "Immediate recall (0-second delay)"
        },
        delay9: { 
            mean: 10.8, 
            sd: 2.3, 
            range: [8, 13],
            description: "9-second delay with distraction"
        },
        delay18: { 
            mean: 7.4, 
            sd: 2.8, 
            range: [4, 11],
            description: "18-second delay with distraction"
        }
    },

    // Convert raw score to percentile for specific delay condition
    getPercentile: function(score, delay) {
        const norms = this.stussNorms[`delay${delay}`];
        if (!norms) return 50;
        
        // Convert raw score to z-score, then to percentile
        const zScore = (score - norms.mean) / norms.sd;
        return this.zScoreToPercentile(zScore);
    },

    // Convert z-score to percentile
    zScoreToPercentile: function(z) {
        // Approximate z-score to percentile conversion using cumulative normal distribution
        if (z >= 2.33) return 99;
        if (z >= 1.96) return 98;
        if (z >= 1.65) return 95;
        if (z >= 1.28) return 90;
        if (z >= 1.04) return 85;
        if (z >= 0.84) return 80;
        if (z >= 0.67) return 75;
        if (z >= 0.52) return 70;
        if (z >= 0.39) return 65;
        if (z >= 0.25) return 60;
        if (z >= 0.13) return 55;
        if (z >= 0.00) return 50;
        if (z >= -0.13) return 45;
        if (z >= -0.25) return 40;
        if (z >= -0.39) return 35;
        if (z >= -0.52) return 30;
        if (z >= -0.67) return 25;
        if (z >= -0.84) return 20;
        if (z >= -1.04) return 15;
        if (z >= -1.28) return 10;
        if (z >= -1.65) return 5;
        if (z >= -1.96) return 2;
        if (z >= -2.33) return 1;
        return 1;
    },

    // Get expected performance range based on score and delay
    getExpectedRange: function(score, delay) {
        const norms = this.stussNorms[`delay${delay}`];
        if (!norms) return "Unknown";
        
        if (score >= norms.range[1]) return "Above Expected";
        if (score >= norms.range[0]) return "Expected Range";
        if (score >= norms.range[0] - 2) return "Below Expected";
        return "Well Below Expected";
    },

    // Clinical interpretation helper
    getClinicalInterpretation: function(score, delay) {
        const percentile = this.getPercentile(score, delay);
        const norms = this.stussNorms[`delay${delay}`];
        
        return {
            score: score,
            delay: delay,
            percentile: percentile,
            mean: norms.mean,
            sd: norms.sd,
            zScore: (score - norms.mean) / norms.sd,
            interpretation: this.getExpectedRange(score, delay)
        };
    },

    // Get all delay conditions data for a complete assessment
    getCompleteAssessment: function(delay0, delay9, delay18) {
        const results = {};
        
        if (delay0 !== null && delay0 !== undefined) {
            results.immediate = this.getClinicalInterpretation(delay0, 0);
        }
        
        if (delay9 !== null && delay9 !== undefined) {
            results.delay9 = this.getClinicalInterpretation(delay9, 9);
        }
        
        if (delay18 !== null && delay18 !== undefined) {
            results.delay18 = this.getClinicalInterpretation(delay18, 18);
        }
        
        // Calculate decay scores if multiple conditions available
        if (results.immediate && results.delay9) {
            results.decay0to9 = {
                raw: delay0 - delay9,
                percentage: ((delay0 - delay9) / delay0) * 100
            };
        }
        
        if (results.immediate && results.delay18) {
            results.decay0to18 = {
                raw: delay0 - delay18,
                percentage: ((delay0 - delay18) / delay0) * 100
            };
        }
        
        if (results.delay9 && results.delay18) {
            results.decay9to18 = {
                raw: delay9 - delay18,
                percentage: ((delay9 - delay18) / delay9) * 100
            };
        }
        
        return results;
    },

    // Clinical flags for unusual patterns
    getClinicalFlags: function(delay0, delay9, delay18) {
        const flags = [];
        
        // Poor immediate recall
        if (delay0 !== null && delay0 < 12) {
            flags.push({
                type: "attention",
                severity: "moderate",
                description: "Poor immediate recall - consider attention or comprehension issues"
            });
        }
        
        // Improvement over time (unusual)
        if (delay9 !== null && delay0 !== null && delay9 > delay0) {
            flags.push({
                type: "validity",
                severity: "high",
                description: "9-second recall better than immediate - unusual pattern"
            });
        }
        
        if (delay18 !== null && delay9 !== null && delay18 > delay9) {
            flags.push({
                type: "validity",
                severity: "high",
                description: "18-second recall better than 9-second - highly unusual pattern"
            });
        }
        
        // Severe decay
        if (delay0 !== null && delay18 !== null) {
            const totalDecay = delay0 - delay18;
            if (totalDecay > 10) {
                flags.push({
                    type: "memory",
                    severity: "severe",
                    description: "Severe working memory decay - consider significant impairment"
                });
            }
        }
        
        // Floor effects
        if (delay18 !== null && delay18 === 0) {
            flags.push({
                type: "impairment",
                severity: "severe",
                description: "Zero recall at 18 seconds - consider severe impairment"
            });
        }
        
        return flags;
    },

    // Normative reference information
    getNormativeInfo: function() {
        return {
            study: "Stuss et al. (1987)",
            sample: "Healthy adults aged 18-89 years",
            task: "Consonant trigram recall with interference",
            conditions: ["0-second delay", "9-second delay", "18-second delay"],
            scoring: "Number of letters correctly recalled out of 15 per condition",
            reference: "Strauss, E., Sherman, E. M. S., & Spreen, O. (2006). A compendium of neuropsychological tests: Administration, norms, and commentary (3rd ed.). Oxford University Press."
        };
    }
};
