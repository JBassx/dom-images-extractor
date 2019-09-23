const findImagesFrom = element => {	
	if(!element || element.nodeType !== 1){
		return false;
    }
    
	const elements = element.querySelectorAll("*");
	const images = [...elements].map(el => {
        const tagName = el.tagName.toLowerCase();
		if(tagName.toLowerCase() === 'img' || tagName.toLowerCase() === 'image'){
			return el.src;
		} else if(el.style.backgroundImage != ""){
			return el.style.backgroundImage.replace(/url\(/g,'').replace(/\)/,'').replace(/"/g,'');
		}
        return "";            
	});
	return images.filter(url => url!=="");
}

export default findImagesFrom;