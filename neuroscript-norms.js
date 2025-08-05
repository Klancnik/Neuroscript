// Neuroscript Shared Normative Database
// Exact Statistical Equivalencies from Heaton (1991) - statconv 2.1.pdf
// Shared across all test generators for consistency
// Version: 2.1 - Updated to match statconv 2.1.pdf exactly
// Notes: Includes complete AACN 7-point scale and corrected Heaton impairment language

window.NeuroscriptDB = {
    // Complete conversion table with exact statistical equivalencies from statconv 2.1.pdf
    conversionTable: [
        {z: -15.0, t: 1, percentile: 0.000001, standard: 1, wechsler: 1, classification: "Severe Intellectual Disability", aacn: "Exceptionally Low", heaton: "severe level of impairment"},
        {z: -4.0, t: 9, percentile: 0.00001, standard: 40, wechsler: 1, classification: "Severe Intellectual Disability", aacn: "Exceptionally Low", heaton: "severe level of impairment"},
        {z: -3.9, t: 10, percentile: 0.0001, standard: 41, wechsler: 1, classification: "Moderate Intellectual Disability", aacn: "Exceptionally Low", heaton: "severe level of impairment"},
        {z: -3.1, t: 19, percentile: 0.001, standard: 54, wechsler: 1, classification: "Mild to Moderate Intellectual Disability", aacn: "Exceptionally Low", heaton: "severe level of impairment"},
        {z: -3.0, t: 20, percentile: 0.1, standard: 55, wechsler: 1, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -3.0, t: 20.5, percentile: 0.2, standard: 56, wechsler: 1, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -2.9, t: 21, percentile: 0.25, standard: 57, wechsler: 1, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -2.8, t: 22, percentile: 0.3, standard: 58, wechsler: 1, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -2.8, t: 22.5, percentile: 0.35, standard: 59, wechsler: 1, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -2.7, t: 23, percentile: 0.4, standard: 60, wechsler: 2, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate to severe level of impairment"},
        {z: -2.6, t: 24, percentile: 0.5, standard: 61, wechsler: 2, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.6, t: 24.5, percentile: 0.6, standard: 62, wechsler: 2, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.5, t: 25, percentile: 0.62, standard: 63, wechsler: 2, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.4, t: 26, percentile: 0.8, standard: 64, wechsler: 2, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.4, t: 26.5, percentile: 0.9, standard: 65, wechsler: 3, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.3, t: 27, percentile: 1, standard: 66, wechsler: 3, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.2, t: 28, percentile: 1.2, standard: 67, wechsler: 3, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.2, t: 28.5, percentile: 1.6, standard: 68, wechsler: 3, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.1, t: 29, percentile: 1.9, standard: 69, wechsler: 3, classification: "Mild Intellectual Disability", aacn: "Exceptionally Low", heaton: "moderate level of impairment"},
        {z: -2.0, t: 30, percentile: 2, standard: 70, wechsler: 4, classification: "Mild Intellectual Disability", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -2.0, t: 30.5, percentile: 3, standard: 71, wechsler: 4, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.9, t: 31, percentile: 3.5, standard: 72, wechsler: 4, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.8, t: 32, percentile: 4, standard: 73, wechsler: 4, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.8, t: 32.5, percentile: 4.2, standard: 74, wechsler: 4, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.7, t: 33, percentile: 4.5, standard: 75, wechsler: 5, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.6, t: 34, percentile: 5, standard: 76, wechsler: 5, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.6, t: 34.5, percentile: 6, standard: 77, wechsler: 5, classification: "Borderline", aacn: "Below Average", heaton: "mild to moderate level of impairment"},
        {z: -1.5, t: 35, percentile: 7, standard: 78, wechsler: 5, classification: "Borderline", aacn: "Below Average", heaton: "mild level of impairment"},
        {z: -1.4, t: 36, percentile: 8, standard: 79, wechsler: 6, classification: "Borderline to Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.4, t: 36.5, percentile: 9, standard: 80, wechsler: 6, classification: "Borderline to Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.3, t: 37, percentile: 10, standard: 81, wechsler: 6, classification: "Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.2, t: 38, percentile: 12, standard: 82, wechsler: 6, classification: "Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.2, t: 38.5, percentile: 13, standard: 83, wechsler: 6, classification: "Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.1, t: 39, percentile: 14, standard: 84, wechsler: 6, classification: "Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.0, t: 40, percentile: 16, standard: 85, wechsler: 7, classification: "Low Average", aacn: "Low Average", heaton: "mild level of impairment"},
        {z: -1.0, t: 40.5, percentile: 17, standard: 86, wechsler: 7, classification: "Low Average", aacn: "Low Average", heaton: "Normal"},
        {z: -0.9, t: 41, percentile: 18, standard: 87, wechsler: 7, classification: "Low Average", aacn: "Low Average", heaton: "Normal"},
        {z: -0.8, t: 42, percentile: 21, standard: 88, wechsler: 7, classification: "Low Average", aacn: "Low Average", heaton: "Normal"},
        {z: -0.8, t: 42.5, percentile: 23, standard: 89, wechsler: 7, classification: "Low Average to Average", aacn: "Low Average", heaton: "Normal"},
        {z: -0.7, t: 43, percentile: 24, standard: 90, wechsler: 8, classification: "Low Average to Average", aacn: "Average", heaton: "Normal"},
        {z: -0.6, t: 44, percentile: 27, standard: 91, wechsler: 8, classification: "Low Average to Average", aacn: "Average", heaton: "Normal"},
        {z: -0.6, t: 44.5, percentile: 29, standard: 92, wechsler: 8, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.5, t: 45, percentile: 31, standard: 93, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.4, t: 46, percentile: 34, standard: 94, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.4, t: 46.5, percentile: 37, standard: 95, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.3, t: 47, percentile: 38, standard: 96, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.2, t: 48, percentile: 42, standard: 97, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.2, t: 48.5, percentile: 45, standard: 98, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: -0.1, t: 49, percentile: 46, standard: 99, wechsler: 9, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.0, t: 50, percentile: 50, standard: 100, wechsler: 10, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.1, t: 51, percentile: 54, standard: 101, wechsler: 10, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.2, t: 51.5, percentile: 55, standard: 102, wechsler: 10, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.2, t: 52, percentile: 58, standard: 103, wechsler: 10, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.3, t: 53, percentile: 62, standard: 104, wechsler: 10, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.4, t: 53.5, percentile: 63, standard: 105, wechsler: 11, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.4, t: 54, percentile: 66, standard: 106, wechsler: 11, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.5, t: 55, percentile: 69, standard: 107, wechsler: 11, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.6, t: 55.5, percentile: 71, standard: 108, wechsler: 11, classification: "Average", aacn: "Average", heaton: "Normal"},
        {z: 0.6, t: 56, percentile: 73, standard: 109, wechsler: 11, classification: "border of the Average to High Average", aacn: "Average", heaton: "Normal"},
        {z: 0.7, t: 57, percentile: 76, standard: 110, wechsler: 12, classification: "border of the Average to High Average", aacn: "High Average", heaton: "Normal"},
        {z: 0.8, t: 57.5, percentile: 77, standard: 111, wechsler: 12, classification: "border of the Average to High Average", aacn: "High Average", heaton: "Normal"},
        {z: 0.8, t: 58, percentile: 79, standard: 112, wechsler: 12, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 0.9, t: 59, percentile: 82, standard: 113, wechsler: 12, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.0, t: 59.5, percentile: 83, standard: 114, wechsler: 13, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.0, t: 60, percentile: 84, standard: 115, wechsler: 13, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.1, t: 61, percentile: 86, standard: 116, wechsler: 13, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.2, t: 61.5, percentile: 87, standard: 117, wechsler: 13, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.2, t: 62, percentile: 88, standard: 118, wechsler: 13, classification: "High Average", aacn: "High Average", heaton: "Normal"},
        {z: 1.3, t: 63, percentile: 90, standard: 119, wechsler: 14, classification: "border of the High Average to Superior", aacn: "High Average", heaton: "Normal"},
        {z: 1.4, t: 63.5, percentile: 91, standard: 120, wechsler: 14, classification: "border of the High Average to Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.4, t: 64, percentile: 92, standard: 121, wechsler: 14, classification: "border of the High Average to Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.5, t: 65, percentile: 93, standard: 122, wechsler: 14, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.6, t: 66.5, percentile: 94, standard: 123, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.6, t: 66, percentile: 95, standard: 124, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.7, t: 67, percentile: 96, standard: 125, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.8, t: 67.5, percentile: 96, standard: 126, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.8, t: 68, percentile: 96, standard: 127, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 1.9, t: 69, percentile: 97, standard: 128, wechsler: 15, classification: "Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 2.0, t: 69.5, percentile: 97.5, standard: 129, wechsler: 16, classification: "border of the Superior to Very Superior", aacn: "Above Average", heaton: "Superior"},
        {z: 2.0, t: 70, percentile: 98, standard: 130, wechsler: 16, classification: "border of the Superior to Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.1, t: 71, percentile: 98.3, standard: 131, wechsler: 16, classification: "border of the Superior to Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.2, t: 71.5, percentile: 98.7, standard: 132, wechsler: 16, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.2, t: 72, percentile: 99, standard: 133, wechsler: 16, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.3, t: 73, percentile: 99.05, standard: 134, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.4, t: 73.5, percentile: 99.1, standard: 135, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.4, t: 74, percentile: 99.2, standard: 136, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.5, t: 75, percentile: 99.4, standard: 137, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.6, t: 75.5, percentile: 99.4, standard: 138, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.6, t: 76, percentile: 99.5, standard: 139, wechsler: 17, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.7, t: 77, percentile: 99.6, standard: 140, wechsler: 18, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.8, t: 77.5, percentile: 99.7, standard: 141, wechsler: 18, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.8, t: 78, percentile: 99.75, standard: 142, wechsler: 18, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 2.9, t: 79, percentile: 99.8, standard: 143, wechsler: 18, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 3.0, t: 79.5, percentile: 99.85, standard: 144, wechsler: 19, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 3.0, t: 80, percentile: 99.9, standard: 145, wechsler: 19, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 3.1, t: 81, percentile: 99.99, standard: 146, wechsler: 19, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"},
        {z: 3.9, t: 90, percentile: 99.999, standard: 159, wechsler: 19, classification: "Very Superior", aacn: "Exceptionally High", heaton: "Very Superior"}
    ],

    // Lookup functions
    getByStandardScore: function(score) {
        console.log('getByStandardScore v2.1 called with score:', score);
        try {
            // Find closest match
            let closest = this.conversionTable.reduce((prev, curr) => 
                Math.abs(curr.standard - score) < Math.abs(prev.standard - score) ? curr : prev
            );
            return closest;
        } catch (error) {
            console.error('Error in getByStandardScore v2.1:', error);
            return { aacn: "Error", percentile: 0, heaton: "Error" };
        }
    },

    getByWechslerScore: function(score) {
        console.log('getByWechslerScore v2.1 called with score:', score);
        try {
            // Find closest match
            let closest = this.conversionTable.reduce((prev, curr) => 
                Math.abs(curr.wechsler - score) < Math.abs(prev.wechsler - score) ? curr : prev
            );
            return closest;
        } catch (error) {
            console.error('Error in getByWechslerScore v2.1:', error);
            return { aacn: "Error", percentile: 0, heaton: "Error" };
        }
    },

    getByTScore: function(score) {
        console.log('getByTScore v2.1 called with score:', score);
        try {
            // Find closest match
            let closest = this.conversionTable.reduce((prev, curr) => 
                Math.abs(curr.t - score) < Math.abs(prev.t - score) ? curr : prev
            );
            return closest;
        } catch (error) {
            console.error('Error in getByTScore v2.1:', error);
            return { aacn: "Error", percentile: 0, heaton: "Error" };
        }
    },

    // Shared utility functions
    getPercentile: function(score, scoreType = 'standard') {
        console.log('getPercentile v2.1 called with score:', score, 'type:', scoreType);
        try {
            let data;
            switch(scoreType) {
                case 'wechsler':
                case 'scaled':
                    data = this.getByWechslerScore(score);
                    break;
                case 't':
                    data = this.getByTScore(score);
                    break;
                default:
                    data = this.getByStandardScore(score);
            }
            return data.percentile;
        } catch (error) {
            console.error('Error in getPercentile v2.1:', error);
            return 0;
        }
    },

    getRange: function(score, scoreType = 'standard') {
        console.log('getRange v2.1 called with score:', score, 'type:', scoreType);
        try {
            let data;
            switch(scoreType) {
                case 'wechsler':
                case 'scaled':
                    data = this.getByWechslerScore(score);
                    break;
                case 't':
                    data = this.getByTScore(score);
                    break;
                default:
                    data = this.getByStandardScore(score);
            }
            return data.aacn + " range"; // Use current AACN labels as default with "range" suffix
        } catch (error) {
            console.error('Error in getRange v2.1:', error);
            return "Error range";
        }
    },

    getDetailedInterpretation: function(score, scoreType = 'standard') {
        console.log('getDetailedInterpretation v2.1 called with score:', score, 'type:', scoreType);
        try {
            let data;
            switch(scoreType) {
                case 'wechsler':
                case 'scaled':
                    data = this.getByWechslerScore(score);
                    break;
                case 't':
                    data = this.getByTScore(score);
                    break;
                default:
                    data = this.getByStandardScore(score);
            }
            
            let interpretation = data.aacn + " range";
            
            // Add Heaton impairment level for T < 40 (equivalent scores)
            if (data.t < 40) {
                interpretation += ` (T=${data.t}), indicating a ${data.heaton}`;
            }
            
            return interpretation;
        } catch (error) {
            console.error('Error in getDetailedInterpretation v2.1:', error);
            return "Error range";
        }
    },

    getOrdinalPercentile: function(percentile) {
        console.log('getOrdinalPercentile v2.1 called with percentile:', percentile);
        try {
            if (percentile === 1) return "1st";
            if (percentile === 2) return "2nd";
            if (percentile === 3) return "3rd";
            return Math.round(percentile) + "th";
        } catch (error) {
            console.error('Error in getOrdinalPercentile v2.1:', error);
            return "0th";
        }
    }
};
