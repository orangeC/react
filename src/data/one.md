### 冒泡排序

冒泡排序算法的运作如下：
1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3.针对所有的元素重复以上的步骤，除了最后一个。
4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

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

选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法（比如序列[5， 5， 3]第一次就将第一个[5]与[3]交换，导致第一个5挪动到第二个5后面）。

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
 ### 快速排序

 快速排序（Quicksort）是对冒泡排序的一种改进。
 快速排序由C. A. R. Hoare在1962年提出。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

```
function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }        
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```