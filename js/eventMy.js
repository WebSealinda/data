var eventUtil={
	//添加事件句柄
   addHandler:function(element,type,hanler){
   	if(element.addEventListener){
   		element.addEventListener(type,hanler,false);
   	}else if (element.attachEvent){
   		element.attachEvent('on'+type,hanler);
   	}else {
   		element['on'+type]=hanler;
   	}
   },
   
// 删除事件句柄
   removeHandler:function(element,type,hanler){
   	if(element.removeEventListener){
   		element.removeEventListener(type,hanler,false);
   	}else if (element.detachEvent){
   		element.detachEvent('on'+type,hanler);
   	}else {
   		element['on'+type]=null;
   	}
   	},
   	
// 	获取事件
   	getEvent:function(event){
   		return event?event:window.event;
   	},
   	
// 	获取类型事件
   	getType:function(event){
   		return event.type;
   	},
   	
// 	获取事件目标
   	getElement:function(event){
   		return event.target || event.srcElement;
   	},
   	
// 	阻止默认行为
   	preventDefault:function(event){
   		if(event.preventDefault){
   			event.preventDefault();
   		}else {
   			event.returnValue=false;
   		}
   	},
   	
// 	阻止冒泡事件
   	stopPropagation:function(event){
           if(event.stopPropagation){
             event.stopPropagation();
           }else{
             event.cancelBubble=true;
           }
   	}
   		
   		
}
