//函数功能判断num是不是一个素数   
//如果是素数 就返回true 否则返回false
function isPrimerNumber(num){
	for( var i = 2 ; i < num ; i++ ){
		if( num % i == 0 ){ //说明不是素数
			return false;
		}
	}
	return true;//是素数
}