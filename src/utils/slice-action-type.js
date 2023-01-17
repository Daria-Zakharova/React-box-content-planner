export const sliceActionType = (actionType, separator = '/') => {
    const startIdx = actionType.indexOf(separator) + 1;
    const endIdx = actionType.lastIndexOf(separator);
    return actionType.slice(startIdx, endIdx);
}