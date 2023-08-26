export function merge(collection_1:number[], collection_2:number[]): number[] {
    let mergeArray:number[] = [];
    let i:number = collection_1.length - 1;
    let j:number = collection_2.length - 1;
    let k:number = collection_1.length + collection_2.length - 1;
    while (i >= 0 && j >= 0) {
        if (collection_1[i] > collection_2[j]) {
            mergeArray[k] = collection_1[i];
            i--;
        }
        else {
            mergeArray[k] = collection_2[j];
            j--;
        }
        k--;
    }
    while (i >= 0) {
        mergeArray[k] = collection_1[i];
        i--;
        k--;
    }

    while (j >= 0) {
        mergeArray[k] = collection_2[j];
        j--;
        k--;
    }

    return mergeArray;
}