export const isType= <T>(objectToBeChecked:any,propertyToBeChecked: keyof T): objectToBeChecked is T =>{
    return (objectToBeChecked as T)[propertyToBeChecked] !== undefined;
}

export const isStringType= <T>(variableToBeChecked:any):variableToBeChecked is T=>{
    return typeof variableToBeChecked === "string";
}