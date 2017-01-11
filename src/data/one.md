### 冒泡排序

```
function bubbleSort(arr){
	var length = arr.length;
	for(i=0;i<length;i++){
		for(j=0;j<length-i-1;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j+1];
				arr[j+1]=arr[j];
				arr[j]=temp
			}
		}
	}
	return arr
}
```
### 选择排序

```
function selectionSort(arr){
	var length = arr.length;
	var minIndex ,temp;
	for(i=0;i<length-1;i++){
		minIndex = i;
		for(j=i+1;j<length;j++){
			if(arr[j]<arr[minIndex]){     //寻找最小的数
				minIndex = j;              //将最小数的索引保存
			}
		}
		temp = arr[minIndex];
		arr[minIndex] = arr[i];
		arr[i] = temp;
	}
	return arr
}
```
 
