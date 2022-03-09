/**
 * validate(inputValue, validationData) is used for validating data,
 * @param inputValue is the data to be validated
 * @param validationData is an object with the requirements
 * currently supported metrics are:
 * 1. type (required), 2. length, 3. value
 * @returns {object} {state: boolean[, requirement: string]}
 */
function validate(inputValue, validationData) {


    //Check for type
    if(typeof(inputValue) !== validationData['type']){
        return {'state': false, 'requirement': 'type'};
    }

    //Check for length
    if(validationData['length']){

        if ( validationData['length'].hasOwnProperty('greaterThan')
            && inputValue.length <= validationData['length']['greaterThan'] ) {

            return {'state': false, 'requirement': 'length'};

        }

        if( validationData['length'].hasOwnProperty('lesserThan')
            && inputValue.length >= validationData['length']['lesserThan'] ){

            return {'state': false, 'requirement': 'length'};
        }

        if( validationData['length']['equals']
            && inputValue.length !== validationData['length']['equals'] ){

            return {'state': false, 'requirement': 'length'};
        }
    }

    //Check for value
    if(validationData['value'] && inputValue !== validationData['value']){
        return {'state': false, 'requirement': 'value'};
    }

    //Check for pattern
    if(validationData.hasOwnProperty('pattern')
    && !inputValue.match(validationData['pattern'])){
        return {'state': false, 'requirement': 'pattern'};
    }

    return {'state': true};
}

export default validate;