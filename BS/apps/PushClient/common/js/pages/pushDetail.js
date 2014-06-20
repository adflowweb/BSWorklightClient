//layout
var oPageLayoutUI = new jindo.m.PageLayoutUI();


function backButton(){
	$("#page-container").load(pagesHistory.pop(), function() {
		
		console.log('page..back');
		});
}

