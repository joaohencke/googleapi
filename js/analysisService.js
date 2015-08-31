app.factory('analysisService', function () {

	var _splitChars = function (text) {
        return text.toString().split("");
    }

    var _removeChars = function (charArray) {
        var arrayToReturn = [];
        angular.forEach(charArray, function(charElement) {
            if (arrayToReturn.indexOf(charElement) < 0) {
                arrayToReturn.push(charElement);
            }
        });

        return arrayToReturn;

    }

    var _combine = function (set, k) {
        var i, j, arrayToReturn, head, array;
        
        if (k > set.length || k <= 0) {
            return [];
        }
        
        if (k == set.length) {
            return [set];
        }
        
        if (k == 1) {
            arrayToReturn = [];
            for (i = 0; i < set.length; i++) {
                arrayToReturn.push([set[i]]);
            }
            return arrayToReturn;
        }
        
        arrayToReturn = [];
        for (i = 0; i < set.length - k + 1; i++) {
            head = set.slice(i, i+1);
            array = _combine(set.slice(i + 1), k - 1);
            for (j = 0; j < array.length; j++) {
                arrayToReturn.push(head.concat(array[j]));
            }
        }
        return arrayToReturn;
    }

	return {
        removeChars : function (text) {
            return _removeChars(_splitChars(text));
        },

        combine : function (array, n) {
            //return _combine(array, n)
            return _combine(array, n);
        }

	}

});