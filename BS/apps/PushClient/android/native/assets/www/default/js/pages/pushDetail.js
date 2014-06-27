
/* JavaScript content from js/pages/pushDetail.js in folder common */
//layout
var oPageLayoutUI = new jindo.m.PageLayoutUI();


function backButton(){
	$("#page-container").load(pagesHistory.pop(), function() {
		
		console.log('page..back');
		});
}

