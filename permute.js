let arr = ['a', 'b', 'c'];

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function permute(arr){
    let n = arr.length;
    for(let i = 0; i<n; i++)
    {
        for(let j = 0; j<n; j++)
        {
            if(i!=j && j<=n)
            {
                swap(arr, j, i);
                console.log(arr)
            }
            else{
                swap(arr, j, 1);
            }
        }
    }
}

permute(arr)