﻿var uhcommon = {'有権者数':'選挙当日の有権者数',
				'投票者数':'投票者数',
				'有効投票数':'有効投票数',
				'いずれの':'いずれの候補者にも属さない有効投票数',
				'投票率':'投票率',
				'定数':'選挙区定数',
				'候補者数':'候補者数'};
var uhcontent = {'cand':'得票数（候補者別）',
				'party':'得票数（政党別）',
				'candRelative':'相対得票率（候補者別）',
				'partyRelative':'相対得票率（政党別）',
				'candAbsolute':'絶対得票率（候補者別）',
				'partyAbsolute':'絶対得票率（政党別）'};
var uhsummarize = {'summarize':'諸派・無所属をまとめる'};
var normal = {'有権者数':'選挙当日の有権者数',
			'投票者数':'投票者数',
			'有効投票数':'有効投票数',
			'定数':'選挙区定数',
			'候補者数':'候補者数',
			'得票数':'得票数',
			'得票総数':'得票総数',
			'届け出順':'届け出順',
			'順位':'順位',
			'名前':'氏名',
			'年齢':'年齢',
			'党派・会派等':'党派・会派等',
			'現新':'現職・新人の別',
			'サイト':'サイト',
			//'性別':'性別',
			'前職':'前職'};
			
function treeMenu(tName) {
  tMenu = document.all[tName].style;
  if(tMenu.display == 'none') tMenu.display = "block";
  else tMenu.display = "none";
}
			
function loopContent(contents,contentsName){//要素を追加する関数
	var names = document.getElementsByClassName('change');
	for(key in contents){
		var checkbox = document.createElement('input');
		var text = document.createTextNode(contents[key]);
		var br = document.createElement('br');
		checkbox.type = 'checkbox';
		checkbox.name = contentsName;
		checkbox.value = key; 
		names.item(0).appendChild(br);
		names.item(0).appendChild(checkbox);
		names.item(0).appendChild(text);
		names.item(0).appendChild(br);
	}
}
function deleteContent(){//要素を削除する関数
	var names = document.getElementsByClassName('change');
	var tags = names[0].childNodes;
	for(i = 0;i < tags.length * 50;i++){//なぜ×50で動くのかわからない。誰か教えてください。
		names.item(0).removeChild(names.item(0).lastChild);
	}
}

function relation(){
	type=document.myform.type[0].checked;
	if(type==true){
		deleteContent();
		loopContent(normal,'uhnormal[]');
		$( "#treeMenu7" ).children( "input" ).attr( "checked", false );
		$( "#treeMenu7" ).children( "input" ).attr( "disabled", "disabled" );
	/*}else if(type==false){
		deleteContent();
		loopContent(uhcommon,'uhcommon[]');
		loopContent(uhcontent,'uhcontent[]');
		loopContent(uhsummarize,'uhsummarize[]');
		$("#treeMenu7").children("input").removeAttr("disabled");
		$( "input[value='summarize']" ).css( "margin-left", "25px" );
	*/}else if((type==false) && $(".none").is( ':checked' )){
		deleteContent();
		loopContent(uhcommon,'uhcommon[]');
		loopContent(uhcontent,'uhcontent[]');
		loopContent(uhsummarize,'uhsummarize[]');
		$("#treeMenu7").children("input").removeAttr("disabled");
		$( "input[value='summarize']" ).css( "margin-left", "25px" );
	  }else if((type==false) && $(".pattern1").is( ':checked' )){
		deleteContent();
		loopContent(uhcommon,'uhcommon[]');
		loopContent(uhcontent,'uhcontent[]');
		loopContent(uhsummarize,'uhsummarize[]');
		$("#treeMenu7").children("input").removeAttr("disabled");
		$( "input[value='summarize']" ).css( "margin-left", "25px" );
		$("input[value='投票率']").attr( "checked", false );
   	    $("input[value='candRelative']").attr( "checked", false );
   	    $("input[value='partyRelative']").attr( "checked", false );
   	    $("input[value='candAbsolute']").attr( "checked", false );
   	    $("input[value='partyAbsolute']").attr( "checked", false );
   	    $("input[value='投票率']").attr( "disabled", "disabled" );
   	    $("input[value='candRelative']").attr( "disabled", "disabled" );
   	    $("input[value='partyRelative']").attr( "disabled", "disabled" );
   	    $("input[value='candAbsolute']").attr( "disabled", "disabled" );
   	    $("input[value='partyAbsolute']").attr( "disabled", "disabled" );
	}else if((type==false) && $(".pattern2").is( ':checked' )){
		deleteContent();
		loopContent(uhcommon,'uhcommon[]');
		loopContent(uhcontent,'uhcontent[]');
		loopContent(uhsummarize,'uhsummarize[]');
		$("#treeMenu7").children("input").removeAttr("disabled");
		$( "input[value='summarize']" ).css( "margin-left", "25px" );
		$("input[value='投票率']").attr( "checked", false );
   	    $("input[value='candRelative']").attr( "checked", false );
   	    $("input[value='partyRelative']").attr( "checked", false );
   	    $("input[value='candAbsolute']").attr( "checked", false );
   	    $("input[value='partyAbsolute']").attr( "checked", false );
   	    $("input[value='投票率']").attr( "disabled", "disabled" );
   	    $("input[value='candRelative']").attr( "disabled", "disabled" );
   	    $("input[value='partyRelative']").attr( "disabled", "disabled" );
   	    $("input[value='candAbsolute']").attr( "disabled", "disabled" );
   	    $("input[value='partyAbsolute']").attr( "disabled", "disabled" );
	}
}

function txt(){  
   var myvalue = $("#text").val().split(",");
   var words = ["pre", "middle", "small", "city", "none", "pattern1", "pattern2", "uh2007", "uh2008", "uh2009", "uh2010", "uh2011", "uh2012", "uh2013", "uh2014", "uh2015", "uh2016", "uh2017", "uh2018", "uh2019", "uh2020", "uh2021", "uh2022", "uh2023", "uh1007", "uh1008", "uh1009", "uh1010", "uh1011", "uh1012", "uh3013", "uh3014", "uh3015", "uh3016", "uh3017", "uh3018", "uh3019", "uh3020", "uh3021", "uh3022", "uh4019", "uh4020", "uh4021", "uh4022", "uh4023", "name", "kana", "age", "sex", "party", "presentPost", "previousPost", "candInfo"];
   //var open = ["#treeMenu4", "#treeMenu5", "#treeMenu6", "#treeMenu7", "#treeMenu9", "#treeMenu11"];
   for( var i = 0; i < myvalue.length; i++ ){
      for( var j = 0; j < words.length; j++ ){
            if( myvalue[i] == words[j] ){
		       $( 'input[value=' + myvalue[i] + ']' ).parent("DIV").css( "display", "block" );
		       $( 'input[value=' + myvalue[i] + ']' ).prop("checked", true);
	          }
		}	  
   }


   var myvalueR = $("#text").val().split(",");
   var sectionR = ["normalized", "relation"];
   var pullR = ["有権者数", "投票者数", "有効投票数", "いずれの", "投票率", "定数", "候補者数", "cand", "party", "candRelative", "partyRelative", "candAbsolute", "partyAbsolute", "summarize", "得票数", "得票総数", "届け出順", "順位", "名前", "年齢", "党派・会派等", "現新", "サイト", " 性別", "前職"];
   for( var m = 0; m < myvalueR.length; m++ ){
      for( var n = 0; n < sectionR.length; n++){
         if( myvalueR[m] == sectionR[n] ){
		    
         	$( 'input[value=' + myvalueR[m] + ']' ).prop("checked", true);
         	$( 'input[value=' + myvalueR[m] + ']' ).parent("DIV").css( "display", "block" );
         	$("#change").show(relation());

         }
      }
   }

   for( var l = 0; l < myvalueR.length; l++){
      for( var o = 0; o < pullR.length; o++){
      	 if( myvalueR[l] === pullR[o]){
      	    $( 'input[value=' + myvalueR[l] + ']' ).prop("checked", true);
      	 }
      }
   }
}

$(document).ready( function() {
if( $(".normalized").prop("checked", true) ){
   $("#change").show( relation() );
}
})

function check(){
	if( $("input[value='city']").is( ':checked' )){
      $(".other").css("display", "block");
   }else if( $("input[value='pre']").is( ':checked' )){
	  $(".other").css("display", "none");
	  $("input[value='投票率']").removeAttr(  "disabled" );
   	  $("input[value='candRelative']").removeAttr(  "disabled" );
   	  $("input[value='partyRelative']").removeAttr(  "disabled" );
   	  $("input[value='candAbsolute']").removeAttr(  "disabled" );
   	  $("input[value='partyAbsolute']").removeAttr(  "disabled" );
   }else if( $("input[value='middle']").is( ':checked' )){
      $(".other").css("display", "none");
      $("input[value='投票率']").removeAttr(  "disabled" );
   	  $("input[value='candRelative']").removeAttr(  "disabled" );
   	  $("input[value='partyRelative']").removeAttr(  "disabled" );
   	  $("input[value='candAbsolute']").removeAttr(  "disabled" );
   	  $("input[value='partyAbsolute']").removeAttr(  "disabled" );
   }else if( $("input[value='small']").is( ':checked' )){
      $(".other").css("display", "none");
      $("input[value='投票率']").removeAttr(  "disabled" );
   	  $("input[value='candRelative']").removeAttr(  "disabled" );
   	  $("input[value='partyRelative']").removeAttr(  "disabled" );
   	  $("input[value='candAbsolute']").removeAttr(  "disabled" );
   	  $("input[value='partyAbsolute']").removeAttr(  "disabled" );
   }  
}

function ocheck(){
   if( $("input[value='pattern1']").is( ':checked' )){
   	 $("input[value='投票率']").attr( "checked", false );
   	 $("input[value='candRelative']").attr( "checked", false );
   	 $("input[value='partyRelative']").attr( "checked", false );
   	 $("input[value='candAbsolute']").attr( "checked", false );
   	 $("input[value='partyAbsolute']").attr( "checked", false );
   	 $("input[value='投票率']").attr( "disabled", "disabled" );
   	 $("input[value='candRelative']").attr( "disabled", "disabled" );
   	 $("input[value='partyRelative']").attr( "disabled", "disabled" );
   	 $("input[value='candAbsolute']").attr( "disabled", "disabled" );
   	 $("input[value='partyAbsolute']").attr( "disabled", "disabled" );
   }else if( $("input[value='pattern2']").is( ':checked' )){
     $("input[value='投票率']").attr( "checked", false );
   	 $("input[value='candRelative']").attr( "checked", false );
   	 $("input[value='partyRelative']").attr( "checked", false );
   	 $("input[value='candAbsolute']").attr( "checked", false );
   	 $("input[value='partyAbsolute']").attr( "checked", false );  	
     $("input[value='投票率']").attr( "disabled", "disabled" );
   	 $("input[value='candRelative']").attr( "disabled", "disabled" );
   	 $("input[value='partyRelative']").attr( "disabled", "disabled" );
   	 $("input[value='candAbsolute']").attr( "disabled", "disabled" );
   	 $("input[value='partyAbsolute']").attr( "disabled", "disabled" );
   }else{
   	 $("input[value='投票率']").removeAttr(  "disabled" );
   	 $("input[value='candRelative']").removeAttr(  "disabled" );
   	 $("input[value='partyRelative']").removeAttr(  "disabled" );
   	 $("input[value='candAbsolute']").removeAttr(  "disabled" );
   	 $("input[value='partyAbsolute']").removeAttr(  "disabled" );
   }
}