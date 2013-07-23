function sendQuestion(){
		//GET HTML TEXT FROM TEXT AREA TINYMCE
		var text = tinymce.get('textFormat').getContent().replace(/&nbsp;/g,'');
		$("#formatDom").html(text);
		
		var pList = [];// list tag br
		
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
		
		//Init string multiple choice
		var textChoice = "[";
		
		//Check text is question mutiple choice
		var div = "<div class='p'> Y cua ban la nhu nay phai khong? <br>";
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
					}else{
						//Lay ra tung dap an roi dua vao textChoice vi du : [an,
						textChoice = textChoice + pList[$i].text.replace(/([aA1])([\,\.\s*]*)/,'').trim() + ",";
					}
					break;
					
				case 2: 
				if(!pList[$i].text.match(/([bB2])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;
					}else{
						//Lay ra tung dap an roi dua vao textChoice vi du : [an,a,
						textChoice = textChoice + pList[$i].text.replace(/([bB2])([\,\.\s*]*)/,'').trim() + ",";
					}
					break;
					
				case 3: 
				if(!pList[$i].text.match(/([cC3])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;		
					}else{
						//Lay ra tung dap an roi dua vao textChoice vi du : [an,a,the,
						textChoice = textChoice + pList[$i].text.replace(/([cC3])([\,\.\s*]*)/,'').trim() + ",";
					}
					break;
					
				case 4: 
				if(!pList[$i].text.match(/([dD4])([\,\.\s*]*)([a-zA-Z0-9_\.\-])/)){
						$check = 0;
						break;	
					}else{
						//Lay ra tung dap an roi dua vao textChoice vi du : [an,a,the,none
						textChoice = textChoice + pList[$i].text.replace(/([dD4])([\,\.\s*]*)/,'').trim();
					}
					break;
			}
		}
		
		
		textChoice =  textChoice + "]";
		div = div + "</div>";
		
		//Replace ...... or ______ or ------- to [a,an,the,none]
		div = div.replace(/([\-\_\.]{3,})/,textChoice);
		 //Display the questions data visually
		if($check === 1){
			//if question is mutipleChoice
		    $("#formatQuestion").html(div);	
		}else{
		    alert("Not question mutiple choice");
		}
}					   