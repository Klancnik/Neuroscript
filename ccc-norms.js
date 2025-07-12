// Consonant Trigrams (CCC) Normative Database
// Based on Stuss et al. (1987) normative data
// Referenced in Strauss, Sherman & Spreen (2006) and Lezak et al.
// Consonant Trigrams (CCC) Normative Database
// Based on Stuss et al. (1987) normative data

window.CCCNorms = {
    // Stuss et al. (1987) normative data for Consonant Trigrams
    stussNorms: {
        delay0: { mean: 14.2, sd: 1.1 },
        delay9: { mean: 10.8, sd: 2.3 },
        delay18: { mean: 7.4, sd: 2.8 }
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
    }
};window.CCCNorms = {
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

    // Get normative reference information
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
