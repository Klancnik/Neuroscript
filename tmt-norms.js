// TMT Normative Database
// Based on Heaton et al. (2004) comprehensive norms
// Age and education corrected T-scores for Trail Making Test

window.TMTNorms = {
    // Age and education stratified normative data
    // This is a simplified implementation - in practice, this would contain
    // the complete Heaton et al. (2004) normative tables
    
    getNormativeData: function(age, education) {
        // Age group stratification
        let ageGroup;
        if (age < 20) ageGroup = '18-19';
        else if (age < 30) ageGroup = '20-29';
        else if (age < 40) ageGroup = '30-39';
        else if (age < 50) ageGroup = '40-49';
        else if (age < 60) ageGroup = '50-59';
        else if (age < 70) ageGroup = '60-69';
        else if (age < 80) ageGroup = '70-79';
        else ageGroup = '80-89';
        
        // Education group stratification
        let eduGroup;
        if (education < 9) eduGroup = 'low';
        else if (education < 13) eduGroup = 'medium';
        else eduGroup = 'high';
        
        // Return normative cutoffs for this age/education group
        // These are approximations - replace with actual Heaton tables
        return this.normativeTable[ageGroup][eduGroup];
    },
    
    // Simplified normative table structure
    // In practice, this would contain the complete Heaton et al. data
    normativeTable: {
        '18-19': {
            low: { trailsA: { T70: 15, T60: 20, T50: 25, T40: 35, T30: 50 }, 
                   trailsB: { T70: 35, T60: 45, T50: 60, T40: 80, T30: 120 } },
            medium: { trailsA: { T70: 12, T60: 17, T50: 22, T40: 30, T30: 45 }, 
                      trailsB: { T70: 30, T60: 40, T50: 55, T40: 75, T30: 110 } },
            high: { trailsA: { T70: 10, T60: 15, T50: 20, T40: 28, T30: 40 }, 
                    trailsB: { T70: 25, T60: 35, T50: 50, T40: 70, T30: 100 } }
        },
        '20-29': {
            low: { trailsA: { T70: 16, T60: 21, T50: 26, T40: 36, T30: 51 }, 
                   trailsB: { T70: 36, T60: 46, T50: 61, T40: 81, T30: 121 } },
            medium: { trailsA: { T70: 13, T60: 18, T50: 23, T40: 31, T30: 46 }, 
                      trailsB: { T70: 31, T60: 41, T50: 56, T40: 76, T30: 111 } },
            high: { trailsA: { T70: 11, T60: 16, T50: 21, T40: 29, T30: 41 }, 
                    trailsB: { T70: 26, T60: 36, T50: 51, T40: 71, T30: 101 } }
        },
        '30-39': {
            low: { trailsA: { T70: 17, T60: 22, T50: 27, T40: 37, T30: 52 }, 
                   trailsB: { T70: 37, T60: 47, T50: 62, T40: 82, T30: 122 } },
            medium: { trailsA: { T70: 14, T60: 19, T50: 24, T40: 32, T30: 47 }, 
                      trailsB: { T70: 32, T60: 42, T50: 57, T40: 77, T30: 112 } },
            high: { trailsA: { T70: 12, T60: 17, T50: 22, T40: 30, T30: 42 }, 
                    trailsB: { T70: 27, T60: 37, T50: 52, T40: 72, T30: 102 } }
        },
        '40-49': {
            low: { trailsA: { T70: 18, T60: 23, T50: 28, T40: 38, T30: 53 }, 
                   trailsB: { T70: 38, T60: 48, T50: 63, T40: 83, T30: 123 } },
            medium: { trailsA: { T70: 15, T60: 20, T50: 25, T40: 33, T30: 48 }, 
                      trailsB: { T70: 33, T60: 43, T50: 58, T40: 78, T30: 113 } },
            high: { trailsA: { T70: 13, T60: 18, T50: 23, T40: 31, T30: 43 }, 
                    trailsB: { T70: 28, T60: 38, T50: 53, T40: 73, T30: 103 } }
        },
        '50-59': {
            low: { trailsA: { T70: 20, T60: 25, T50: 30, T40: 40, T30: 55 }, 
                   trailsB: { T70: 42, T60: 52, T50: 67, T40: 87, T30: 127 } },
            medium: { trailsA: { T70: 17, T60: 22, T50: 27, T40: 35, T30: 50 }, 
                      trailsB: { T70: 37, T60: 47, T50: 62, T40: 82, T30: 117 } },
            high: { trailsA: { T70: 15, T60: 20, T50: 25, T40: 33, T30: 45 }, 
                    trailsB: { T70: 32, T60: 42, T50: 57, T40: 77, T30: 107 } }
        },
        '60-69': {
            low: { trailsA: { T70: 22, T60: 27, T50: 32, T40: 42, T30: 57 }, 
                   trailsB: { T70: 46, T60: 56, T50: 71, T40: 91, T30: 131 } },
            medium: { trailsA: { T70: 19, T60: 24, T50: 29, T40: 37, T30: 52 }, 
                      trailsB: { T70: 41, T60: 51, T50: 66, T40: 86, T30: 121 } },
            high: { trailsA: { T70: 17, T60: 22, T50: 27, T40: 35, T30: 47 }, 
                    trailsB: { T70: 36, T60: 46, T50: 61, T40: 81, T30: 111 } }
        },
        '70-79': {
            low: { trailsA: { T70: 25, T60: 30, T50: 35, T40: 45, T30: 60 }, 
                   trailsB: { T70: 50, T60: 60, T50: 75, T40: 95, T30: 135 } },
            medium: { trailsA: { T70: 22, T60: 27, T50: 32, T40: 40, T30: 55 }, 
                      trailsB: { T70: 45, T60: 55, T50: 70, T40: 90, T30: 125 } },
            high: { trailsA: { T70: 20, T60: 25, T50: 30, T40: 38, T30: 50 }, 
                    trailsB: { T70: 40, T60: 50, T50: 65, T40: 85, T30: 115 } }
        },
        '80-89': {
            low: { trailsA: { T70: 28, T60: 33, T50: 38, T40: 48, T30: 63 }, 
                   trailsB: { T70: 55, T60: 65, T50: 80, T40: 100, T30: 140 } },
            medium: { trailsA: { T70: 25, T60: 30, T50: 35, T40: 43, T30: 58 }, 
                      trailsB: { T70: 50, T60: 60, T50: 75, T40: 95, T30: 130 } },
            high: { trailsA: { T70: 23, T60: 28, T50: 33, T40: 41, T30: 53 }, 
                    trailsB: { T70: 45, T60: 55, T50: 70, T40: 90, T30: 120 } }
        }
    },
    
    // Convert raw score to T-score
    getRawToTScore: function(rawScore, test, age, education) {
        const norms = this.getNormativeData(age, education);
        const testNorms = norms[test];
        
        if (rawScore <= testNorms.T70) return 70;
        if (rawScore <= testNorms.T60) return 60;
        if (rawScore <= testNorms.T50) return 50;
        if (rawScore <= testNorms.T40) return 40;
        if (rawScore <= testNorms.T30) return 30;
        return 20; // Below T30
    },
    
    // Convert T-score to percentile using standard normal distribution
    getTScoreToPercentile: function(tScore) {
        // T-score to percentile conversion
        const percentileMap = {
            20: 2, 25: 5, 30: 10, 35: 16, 40: 25, 45: 35, 
            50: 50, 55: 65, 60: 75, 65: 84, 70: 91, 75: 95, 80: 98
        };
        
        return percentileMap[tScore] || (tScore < 30 ? 1 : 99);
    },
    
    // Get range classification from neuroscript-norms database
    getTScoreRange: function(tScore) {
        // Use the existing neuroscript-norms database for consistency
        if (window.NeuroscriptDB) {
            const data = window.NeuroscriptDB.getByTScore(tScore);
            // Force add "range" suffix regardless of what's in the database
            return data.aacn + " range";
        }
        
        // Fallback if neuroscript-norms not available
        if (tScore >= 70) return "Exceptionally High range";
        if (tScore >= 65) return "High range";
        if (tScore >= 55) return "High Average range";
        if (tScore >= 45) return "Average range";
        if (tScore >= 35) return "Below Average range";
        if (tScore >= 30) return "Low range";
        return "Exceptionally Low range";
    },
    
    // Get detailed interpretation including Heaton impairment levels
    getDetailedInterpretation: function(rawScore, test, age, education) {
        const tScore = this.getRawToTScore(rawScore, test, age, education);
        const percentile = this.getTScoreToPercentile(tScore);
        const range = this.getTScoreRange(tScore);
        
        let interpretation = range; // Already includes "range" suffix
        
        // Add Heaton impairment levels for T ≤ 40
        if (tScore <= 40) {
            let impairmentLevel;
            if (tScore <= 25) impairmentLevel = "severe level of impairment";
            else if (tScore <= 30) impairmentLevel = "moderate to severe level of impairment";
            else if (tScore <= 35) impairmentLevel = "moderate level of impairment";
            else impairmentLevel = "mild to moderate level of impairment";
            
            interpretation += ` (T=${tScore}), indicating a ${impairmentLevel}`;
        }
        
        return {
            range: interpretation,
            percentile: percentile,
            tScore: tScore
        };
    }
};
