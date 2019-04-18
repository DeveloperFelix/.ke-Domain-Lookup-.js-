'use strict';


exports.check=function(domain){

	let bool = false;

	let tmp_dom=domain.trim();

	if(tmp_dom.includes('http') || tmp_dom.includes('www')){

		let tmp=tmp_dom.substring(tmp_dom.indexOf('.') + 1,tmp_dom.length);
        
        bool=false;

	}else if(tmp_dom.includes('ke')){
       

       bool = true;
	}

	return bool;
}