export const isType= <T>(objectToBeChecked:any,propertyToBeChecked: keyof T): objectToBeChecked is T =>{
    return (objectToBeChecked as T)[propertyToBeChecked] !== undefined;
}