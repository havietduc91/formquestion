var pList = [];// list tag br

function sendQuestion(){
		//GET HTML TEXT
		var text = tinymce.get('textFormat').getContent().replace(/&nbsp;/g,'');
		$("#formatDom").html(text);
		
		alert(text);
		//Loop tag p 
		$("#formatDom p").each(function(i,e){
			var $p = $(this);
			
			//Javascript regex remove all tag html
			var regex = /(<([^>]+)>)/ig;
			var pText = $p.html().replace(regex,'');
			
			//Push pText to pList if pText !== ''
			if(pText.replace(/^\s+/,'')!==''){
				var formatQ = {
				    text: pText	
				};
				pList.push(formatQ);
			}
			
		});
		
		//Check text is question mutiple choice
		div = "<div class='p'> Y cua ban la nhu nay phai khong? <br>";
		$check = 1;
		
		//Loop pList and check content p tag is form mutiple choice
		for($i=0;$i<pList.length;$i++)
		{
			div = div + pList[$i].text + "<br  >";	
			
			switch($i){
				case 1: 
				if(!pList[$i].text.match(/([aA1])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;
					}
					break;
					
				case 2: 
				if(!pList[$i].text.match(/([bB2])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;
					}
					break;
					
				case 3: 
				if(!pList[$i].text.match(/([cC3])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;		
					}
					break;
					
				case 4: 
				if(!pList[$i].text.match(/([dD4])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;	
					}
					break;
			}
		}
		
		div = div + "</div>";
		
		 //Display the questions data visually
		if($check === 1){
		    $(div).insertAfter($("#formatQuestion"));	
		}else{
		    alert("Not question mutiple choice");
		}
}					   