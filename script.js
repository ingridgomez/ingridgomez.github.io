
$(document).ready(function(){
	console.log("ready");
	$(".pupsillhouette").hover(function(){
		$(".puplabel").toggleClass("show");
	});

	$(".doggosillhouette").hover(function(){
		$(".doggolabel").toggleClass("show");
	});

	$(".woofersillhouette").hover(function(){
		$(".wooferlabel").toggleClass("show");
	});
});