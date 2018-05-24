
/*Resistances in Series (Activity 4)
  Author: Sreekanth T M
  NIT Agartala*/

/***/



//PIE library
var PIEcontrolElem;var PIEtitleElem;var PIEsourceElem;var PIEdeveloperElem;var PIEdesignerElem;var PIEtoplineElem;var PIEscreenElem;var PIEspeedElem;var PIEresetButton;var PIEstartButton;var PIEstopButton;var PIEpauseButton;var PIEresumeButton;var PIEslowdownButton;var PIEspeedupButton;var PIEhelpButton;var PIEinfoButton;var PIEhelpModal;var PIEhelpContent;var PIEhelpSpan;var PIEinfoModal;var PIEinfoContent;var PIEinfoSpan;var PIEcanvasW;var PIEcanvasH;var PIEcanvasAspect;var PIEaoiTLX;var PIEaoiTLY;var PIEaoiBRX;var PIEaoiBRY;var PIEaoiW;var PIEaoiH;var PIEaoiAspect;var PIEdislayTLX;var PIEdislayTLY;var PIEdislayBRX;var PIEdislayBRY;var PIEdisplayW;var PIEdisplayH;var PIEdisplayAspect;var PIEscene;var PIEcamera;var PIEcameraAngle;var PIEcameraAspect;var PIEcameraZ;var PIEcameraTarget;var PIErenderer;var PIEambientLight;var PIEspotLight;var PIEraycaster;var PIEsceneElements=[];var PIEdragElements=[];var PIEselectedDrag;var PIEselectedHover;var PIEdragPlane;var PIEmouseP;var PIEdragOffset;var PIEdragIntersect;var PIElastUpdateTime;var PIEpauseOffset;var PIEcurrentTime;var PIEoffsetTime;var PIEanimationON;var PIEanimationPaused;var PIEanimationSpeed;var PIEminAnimationSpeed;var PIEmaxAnimationSpeed;var PIEinputGUI;var PIEinputObject;var PIEitInput;var PIEsInput;var PIEcbInput;var PIEcInput;var PIEitInputNames=[];var PIEitInputHandles=[];var PIEsInputNames=[];var PIEsInputHandles=[];var PIEcbInputNames=[];var PIEcbInputHandles=[];var PIEcInputNames=[];var PIEcInputHandles=[];var PIEdisplayGUI;var PIEdisplayObject;var PIEitDisplay;var PIEsDisplay;var PIEcbDisplay;var PIEcDisplay;var PIEitDisplayNames=[];var PIEitDisplayHandles=[];var PIEsDisplayNames=[];var PIEsDisplayHandles=[];var PIEcbDisplayNames=[];var PIEcbDisplayHandles=[];var PIEcDisplayNames=[];var PIEcDisplayHandles=[];var PIEshowInput;var PIEshowDisplay;function PIEdummy(){}function PIEcreateGUIVariables(){PIEinputObject.it00="";PIEinputObject.it01="";PIEinputObject.it02="";PIEinputObject.it03="";PIEinputObject.it04="";PIEinputObject.it05="";PIEinputObject.it06="";PIEinputObject.it07="";PIEinputObject.it08="";PIEinputObject.it09="";PIEinputObject.it10="";PIEinputObject.it11="";PIEinputObject.it12="";PIEinputObject.it13="";PIEinputObject.it14="";PIEinputObject.it15="";PIEinputObject.it16="";PIEinputObject.it17="";PIEinputObject.it18="";PIEinputObject.it19="";PIEinputObject.s00=0;PIEinputObject.s01=0;PIEinputObject.s02=0;PIEinputObject.s03=0;PIEinputObject.s04=0;PIEinputObject.s05=0;PIEinputObject.s06=0;PIEinputObject.s07=0;PIEinputObject.s08=0;PIEinputObject.s09=0;PIEinputObject.s10=0;PIEinputObject.s11=0;PIEinputObject.s12=0;PIEinputObject.s13=0;PIEinputObject.s14=0;PIEinputObject.s15=0;PIEinputObject.s16=0;PIEinputObject.s17=0;PIEinputObject.s18=0;PIEinputObject.s19=0;PIEinputObject.cb00=false;PIEinputObject.cb01=false;PIEinputObject.cb02=false;PIEinputObject.cb03=false;PIEinputObject.cb04=false;PIEinputObject.cb05=false;PIEinputObject.cb06=false;PIEinputObject.cb07=false;PIEinputObject.cb08=false;PIEinputObject.cb09=false;PIEinputObject.cb10=false;PIEinputObject.cb11=false;PIEinputObject.cb12=false;PIEinputObject.cb13=false;PIEinputObject.cb14=false;PIEinputObject.cb15=false;PIEinputObject.cb16=false;PIEinputObject.cb17=false;PIEinputObject.cb18=false;PIEinputObject.cb19=false;PIEinputObject.c00=PIEdummy;PIEinputObject.c01=PIEdummy;PIEinputObject.c02=PIEdummy;PIEinputObject.c03=PIEdummy;PIEinputObject.c04=PIEdummy;PIEinputObject.c05=PIEdummy;PIEinputObject.c06=PIEdummy;PIEinputObject.c07=PIEdummy;PIEinputObject.c08=PIEdummy;PIEinputObject.c09=PIEdummy;PIEinputObject.c10=PIEdummy;PIEinputObject.c11=PIEdummy;PIEinputObject.c12=PIEdummy;PIEinputObject.c13=PIEdummy;PIEinputObject.c14=PIEdummy;PIEinputObject.c15=PIEdummy;PIEinputObject.c16=PIEdummy;PIEinputObject.c17=PIEdummy;PIEinputObject.c18=PIEdummy;PIEinputObject.c19=PIEdummy;PIEdisplayObject.it00="";PIEdisplayObject.it01="";PIEdisplayObject.it02="";PIEdisplayObject.it03="";PIEdisplayObject.it04="";PIEdisplayObject.it05="";PIEdisplayObject.it06="";PIEdisplayObject.it07="";PIEdisplayObject.it08="";PIEdisplayObject.it09="";PIEdisplayObject.it10="";PIEdisplayObject.it11="";PIEdisplayObject.it12="";PIEdisplayObject.it13="";PIEdisplayObject.it14="";PIEdisplayObject.it15="";PIEdisplayObject.it16="";PIEdisplayObject.it17="";PIEdisplayObject.it18="";PIEdisplayObject.it19="";PIEdisplayObject.s00=0;PIEdisplayObject.s01=0;PIEdisplayObject.s02=0;PIEdisplayObject.s03=0;PIEdisplayObject.s04=0;PIEdisplayObject.s05=0;PIEdisplayObject.s06=0;PIEdisplayObject.s07=0;PIEdisplayObject.s08=0;PIEdisplayObject.s09=0;PIEdisplayObject.s10=0;PIEdisplayObject.s11=0;PIEdisplayObject.s12=0;PIEdisplayObject.s13=0;PIEdisplayObject.s14=0;PIEdisplayObject.s15=0;PIEdisplayObject.s16=0;PIEdisplayObject.s17=0;PIEdisplayObject.s18=0;PIEdisplayObject.s19=0;PIEdisplayObject.cb00=false;PIEdisplayObject.cb01=false;PIEdisplayObject.cb02=false;PIEdisplayObject.cb03=false;PIEdisplayObject.cb04=false;PIEdisplayObject.cb05=false;PIEdisplayObject.cb06=false;PIEdisplayObject.cb07=false;PIEdisplayObject.cb08=false;PIEdisplayObject.cb09=false;PIEdisplayObject.cb10=false;PIEdisplayObject.cb11=false;PIEdisplayObject.cb12=false;PIEdisplayObject.cb13=false;PIEdisplayObject.cb14=false;PIEdisplayObject.cb15=false;PIEdisplayObject.cb16=false;PIEdisplayObject.cb17=false;PIEdisplayObject.cb18=false;PIEdisplayObject.cb19=false;PIEdisplayObject.c00=PIEdummy;PIEdisplayObject.c01=PIEdummy;PIEdisplayObject.c02=PIEdummy;PIEdisplayObject.c03=PIEdummy;PIEdisplayObject.c04=PIEdummy;PIEdisplayObject.c05=PIEdummy;PIEdisplayObject.c06=PIEdummy;PIEdisplayObject.c07=PIEdummy;PIEdisplayObject.c08=PIEdummy;PIEdisplayObject.c09=PIEdummy;PIEdisplayObject.c10=PIEdummy;PIEdisplayObject.c11=PIEdummy;PIEdisplayObject.c12=PIEdummy;PIEdisplayObject.c13=PIEdummy;PIEdisplayObject.c14=PIEdummy;PIEdisplayObject.c15=PIEdummy;PIEdisplayObject.c16=PIEdummy;PIEdisplayObject.c17=PIEdummy;PIEdisplayObject.c18=PIEdummy;PIEdisplayObject.c19=PIEdummy}function PIEshowDisplayPanel(){PIEinputGUI.domElement.style.display="none";PIEshowInput=false;PIEdisplayGUI.domElement.style.display="inline";PIEshowDisplay=true}function PIEshowInputPanel(){PIEdisplayGUI.domElement.style.display="none";PIEshowDisplay=false;PIEinputGUI.domElement.style.display="inline";PIEshowInput=true}function PIEsetupGUI(){PIEinputObject=new Object();PIEitInput=0;PIEsInput=0;PIEcbInput=0;PIEcInput=0;PIEdisplayObject=new Object();PIEitDisplay=0;PIEsDisplay=0;PIEcbDisplay=0;PIEcDisplay=0;PIEcreateGUIVariables();PIEinputGUI=new dat.gui.GUI();PIEdisplayGUI=new dat.gui.GUI();PIEshowInputPanel()}function loadExperiment(){var a;var b;if(!Detector.webgl){Detector.addGetWebGLMessage()}else{a="font-family: Monospace; background-color: #000; color: #000; margin: 0px; overflow: hidden;";b="font-family: Monospace; margin: 0px; overflow: hidden;";divStyle="position: fixed; left: 0px; top: 0px;";document.body.addEventListener("dragenter",PIEtableDragEnter,false);document.body.addEventListener("dragover",PIEtableDragOver,false);document.body.addEventListener("drop",PIEtableDrop,false);document.body.style=a;PIEscreenElem=document.createElement("div");PIEscreenElem.style.margin="0px";PIEscreenElem.style.padding="0px";document.body.appendChild(PIEscreenElem);PIEtoplineElem=document.createElement("div");PIEtoplineElem.style.backgroundColor="#000000";PIEtoplineElem.style.color="#fff";PIEtoplineElem.style.width="100%";PIEtoplineElem.style.position="absolute";PIEtoplineElem.style.left="0";PIEtoplineElem.style.top="0";document.body.appendChild(PIEtoplineElem);PIEsourceElem=document.createElement("span");PIEsourceElem.style=b;PIEtoplineElem.appendChild(PIEsourceElem);PIEdesignerElem=document.createElement("span");PIEdesignerElem.style=b;PIEtoplineElem.appendChild(PIEdesignerElem);PIEtitleElem=document.createElement("span");PIEtitleElem.style=b;PIEtoplineElem.appendChild(PIEtitleElem);PIEdeveloperElem=document.createElement("span");PIEdeveloperElem.style=b;PIEtoplineElem.appendChild(PIEdeveloperElem);PIEsourceElem.innerHTML='<a href="http://www.ekshiksha.org.in" target="_blank" style="color:#FF5454;"><b><u>ekshiksha</u></b></a>';PIEcanvasW=window.innerWidth;PIEcanvasH=window.innerHeight;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIEanimationON=false;PIEanimationPaused=false;PIEanimationSpeed=1;PIEminAnimationSpeed=0.125;PIEmaxAnimationSpeed=4;PIEaddSystemButtons();PIEaddModalWindows();PIEscene=new THREE.Scene();PIEcameraAngle=30;PIEcamera=new THREE.PerspectiveCamera(PIEcameraAngle,PIEcanvasAspect,0.1,1000);PIEcameraTarget=new THREE.Vector3();PIErenderer=new THREE.WebGLRenderer({antialias:true});PIErenderer.setPixelRatio(window.devicePixelRatio);PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIErenderer.gammaInput=true;PIErenderer.gammaOutput=true;PIErenderer.shadowMap.enabled=true;PIEscreenElem.appendChild(PIErenderer.domElement);PIEsetupGUI();loadExperimentElements();lightX=PIEaoiTLX+PIEaoiW*0.25;lightY=PIEaoiBRY+PIEaoiH*0.75;lightZ=PIEcamera.position.z;PIEambientLight=new THREE.AmbientLight(16777215,0.3);PIEambientLight.position.set(lightX,lightY,lightZ);PIEscene.add(PIEambientLight);lightX=PIEaoiTLX+PIEaoiW*0.75;PIEspotLight=new THREE.PointLight(16777215);PIEspotLight.position.set(lightX,lightY,lightZ);PIEspotLight.castShadow=true;PIEscene.add(PIEspotLight);PIEraycaster=new THREE.Raycaster();PIEdragPlane=new THREE.Plane();PIEmouseP=new THREE.Vector2();PIEdragOffset=new THREE.Vector3();PIEdragIntersect=new THREE.Vector3();PIEselectedDrag=null;PIEselectedHover=null;window.addEventListener("resize",PIEresize,false);PIErenderer.domElement.addEventListener("mousemove",PIEmouseMove,false);PIErenderer.domElement.addEventListener("mousedown",PIEmouseDown,false);PIErenderer.domElement.addEventListener("mouseup",PIEmouseUp,false);PIErenderer.domElement.addEventListener("click",PIEmouseClick,false);updateExperimentElements(0,0);PIErenderer.render(PIEscene,PIEcamera)}}function PIEaddSystemButtons(){PIEresetButton=PIEaddButton("reset");PIEresetButton.style="background: none; border: none; box-sizing:border-box;";PIEresetButton.innerHTML='<img src="ButtonRound.png" alt="reset" style="height: inherit; width: 60%;">';PIEresetButton.style.display="inline";PIEresetButton.addEventListener("click",PIEresetExperiment);PIEstartButton=PIEaddButton("start");PIEstartButton.style.display="inline";PIEstartButton.addEventListener("click",PIEstartAnimation);PIEstopButton=PIEaddButton("stop");PIEstopButton.style.display="none";PIEstopButton.addEventListener("click",PIEstopAnimation);PIEpauseButton=PIEaddButton("pause");PIEpauseButton.style="background: none; border: none; box-sizing:border-box;";PIEpauseButton.innerHTML='<img src="ButtonPause.png" alt="pause" style="height: inherit; width: 60%;">';PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEpauseButton.addEventListener("click",PIEpauseAnimation);PIEresumeButton=PIEaddButton("resume");PIEresumeButton.style="background: none; border: none; box-sizing:border-box;";PIEresumeButton.innerHTML='<img src="ButtonPlay.png" alt="resume" style="height: inherit; width: 60%;">';PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEresumeButton.addEventListener("click",PIEresumeAnimation);PIEslowdownButton=PIEaddButton("<<");PIEslowdownButton.addEventListener("click",PIEslowdownAnimation);PIEspeedElem=document.createElement("span");PIEspeedElem.innerHTML=PIEanimationSpeed;PIEtoplineElem.appendChild(PIEspeedElem);PIEspeedupButton=PIEaddButton(">>");PIEspeedupButton.addEventListener("click",PIEspeedupAnimation);PIEinfoButton=PIEaddButton("info");PIEinfoButton.style="background: none; border: none; box-sizing:border-box;";PIEinfoButton.innerHTML='<img src="ButtonInfo.png" alt="info" style="height: inherit; width: 60%;">';PIEinfoButton.addEventListener("click",PIEshowInfo);PIEhelpButton=PIEaddButton("help");PIEhelpButton.style="background: none; border: none; box-sizing:border-box;";PIEhelpButton.innerHTML='<img src="ButtonHelp.png" alt="help" style="height: inherit; width: 60%;">';PIEhelpButton.addEventListener("click",PIEshowHelp)}function PIEaddModalWindows(){var a;var b;a="display: none; position: fixed; z-index: 1; padding-top: 100px; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4); color:#000;";ImodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #008000; width: 80%;";HmodalContentStyle="background-color:rgb(236,236,236); background-color:rgba(236,236,236,0.95); margin: auto auto 200px; padding: 20px; border: 10px solid #F0F000; width: 80%;";PIEhelpModal=document.createElement("div");PIEhelpModal.style=a;PIEhelpModal.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpContent=document.createElement("div");PIEhelpContent.style=HmodalContentStyle;PIEhelpSpan=document.createElement("span");PIEhelpSpan.className="close";PIEhelpSpan.style="color: #000000; float: right; font-size: 28px; font-weight: bold;";PIEhelpSpan.innerHTML="&times;";PIEhelpSpan.onclick=function(){PIEhelpModal.style.display="none"};PIEhelpSpan.onmouseover=function(){PIEhelpSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEhelpSpan.onmouseout=function(){PIEhelpSpan.style="color: #000000; cursor: auto;"};PIEhelpContent.appendChild(PIEhelpSpan);PIEhelpModal.appendChild(PIEhelpContent);PIEscreenElem.appendChild(PIEhelpModal);PIEinfoModal=document.createElement("div");PIEinfoModal.style=a;PIEinfoModal.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoContent=document.createElement("div");PIEinfoContent.style=ImodalContentStyle;PIEinfoSpan=document.createElement("span");PIEinfoSpan.className="close";PIEinfoSpan.style="color: #008000; float: right; font-size: 28px; font-weight: bold;";PIEinfoSpan.innerHTML="&times;";PIEinfoSpan.onclick=function(){PIEinfoModal.style.display="none"};PIEinfoSpan.onmouseover=function(){PIEinfoSpan.style="color: #000; text-decoration: none; cursor: pointer;"};PIEinfoSpan.onmouseout=function(){PIEinfoSpan.style="color: #008000; cursor: auto;"};PIEinfoContent.appendChild(PIEinfoSpan);PIEinfoModal.appendChild(PIEinfoContent);PIEscreenElem.appendChild(PIEinfoModal)}function PIEshowHelp(){PIEhelpModal.style.display="block"}function PIEupdateHelp(b){var a;PIEhelpContent.innerHTML="";PIEhelpContent.appendChild(PIEhelpSpan);a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEappendHelp(b){var a;a=PIEhelpContent.innerHTML;PIEhelpContent.innerHTML=a+b}function PIEshowInfo(){PIEinfoModal.style.display="block"}function PIEupdateInfo(a){var b;PIEinfoContent.innerHTML="";PIEinfoContent.appendChild(PIEinfoSpan);b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEappendInfo(a){var b;b=PIEinfoContent.innerHTML;PIEinfoContent.innerHTML=b+a}function PIEresize(){var b;var a;b=window.innerWidth;a=window.innerHeight;PIEcanvasW=b;PIEcanvasH=a;PIEcanvasAspect=PIEcanvasW/PIEcanvasH;PIErenderer.setSize(PIEcanvasW,PIEcanvasH);PIEadjustDisplayScene();PIErender()}function PIEsetExperimentTitle(a){PIEtitleElem.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b><u>"+a+"</u></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}function PIEsetDeveloperName(a){PIEdeveloperElem.innerHTML="Created by : "+a}function PIEhideControlElement(){}function PIEshowControlElement(){}function PIEaddDualText(a,c,b){PIEaddInputText(a,c,b);PIEaddDisplayText(a,c)}function PIEaddDisplayText(b,c){var a;switch(PIEitDisplay){case 0:PIEdisplayObject.it00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it00").name(b);break;case 1:PIEdisplayObject.it01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it01").name(b);break;case 2:PIEdisplayObject.it02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it02").name(b);break;case 3:PIEdisplayObject.it03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it03").name(b);break;case 4:PIEdisplayObject.it04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it04").name(b);break;case 5:PIEdisplayObject.it05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it05").name(b);break;case 6:PIEdisplayObject.it06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it06").name(b);break;case 7:PIEdisplayObject.it07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it07").name(b);break;case 8:PIEdisplayObject.it08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it08").name(b);break;case 9:PIEdisplayObject.it09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it09").name(b);break;case 10:PIEdisplayObject.it10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it10").name(b);break;case 11:PIEdisplayObject.it11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it11").name(b);break;case 12:PIEdisplayObject.it12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it12").name(b);break;case 13:PIEdisplayObject.it13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it13").name(b);break;case 14:PIEdisplayObject.it14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it14").name(b);break;case 15:PIEdisplayObject.it15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it15").name(b);break;case 16:PIEdisplayObject.it16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it16").name(b);break;case 17:PIEdisplayObject.it17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it17").name(b);break;case 18:PIEdisplayObject.it18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it18").name(b);break;case 19:PIEdisplayObject.it19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"it19").name(b);break;default:return;break}PIEitDisplayHandles.push(a);PIEitDisplayNames.push(b);PIEitDisplay++}function PIEaddInputText(b,d,c){var a;switch(PIEitInput){case 0:PIEinputObject.it00=d;a=PIEinputGUI.add(PIEinputObject,"it00").name(b);break;case 1:PIEinputObject.it01=d;a=PIEinputGUI.add(PIEinputObject,"it01").name(b);break;case 2:PIEinputObject.it02=d;a=PIEinputGUI.add(PIEinputObject,"it02").name(b);break;case 3:PIEinputObject.it03=d;a=PIEinputGUI.add(PIEinputObject,"it03").name(b);break;case 4:PIEinputObject.it04=d;a=PIEinputGUI.add(PIEinputObject,"it04").name(b);break;case 5:PIEinputObject.it05=d;a=PIEinputGUI.add(PIEinputObject,"it05").name(b);break;case 6:PIEinputObject.it06=d;a=PIEinputGUI.add(PIEinputObject,"it06").name(b);break;case 7:PIEinputObject.it07=d;a=PIEinputGUI.add(PIEinputObject,"it07").name(b);break;case 8:PIEinputObject.it08=d;a=PIEinputGUI.add(PIEinputObject,"it08").name(b);break;case 9:PIEinputObject.it09=d;a=PIEinputGUI.add(PIEinputObject,"it09").name(b);break;case 10:PIEinputObject.it10=d;a=PIEinputGUI.add(PIEinputObject,"it10").name(b);break;case 11:PIEinputObject.it11=d;a=PIEinputGUI.add(PIEinputObject,"it11").name(b);break;case 12:PIEinputObject.it12=d;a=PIEinputGUI.add(PIEinputObject,"it12").name(b);break;case 13:PIEinputObject.it13=d;a=PIEinputGUI.add(PIEinputObject,"it13").name(b);break;case 14:PIEinputObject.it14=d;a=PIEinputGUI.add(PIEinputObject,"it14").name(b);break;case 15:PIEinputObject.it15=d;a=PIEinputGUI.add(PIEinputObject,"it15").name(b);break;case 16:PIEinputObject.it16=d;a=PIEinputGUI.add(PIEinputObject,"it16").name(b);break;case 17:PIEinputObject.it17=d;a=PIEinputGUI.add(PIEinputObject,"it17").name(b);break;case 18:PIEinputObject.it18=d;a=PIEinputGUI.add(PIEinputObject,"it18").name(b);break;case 19:PIEinputObject.it19=d;a=PIEinputGUI.add(PIEinputObject,"it19").name(b);break;default:return;break}a.onFinishChange(c);PIEitInputHandles.push(a);PIEitInputNames.push(b);PIEitInput++}function PIEchangeDisplayText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitDisplay);c++){if(PIEitDisplayNames[c]==b){a=PIEitDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.it00=d;break;case 1:PIEdisplayObject.it01=d;break;case 2:PIEdisplayObject.it02=d;break;case 3:PIEdisplayObject.it03=d;break;case 4:PIEdisplayObject.it04=d;break;case 5:PIEdisplayObject.it05=d;break;case 6:PIEdisplayObject.it06=d;break;case 7:PIEdisplayObject.it07=d;break;case 8:PIEdisplayObject.it08=d;break;case 9:PIEdisplayObject.it09=d;break;case 10:PIEdisplayObject.it10=d;break;case 11:PIEdisplayObject.it11=d;break;case 12:PIEdisplayObject.it12=d;break;case 13:PIEdisplayObject.it13=d;break;case 14:PIEdisplayObject.it14=d;break;case 15:PIEdisplayObject.it15=d;break;case 16:PIEdisplayObject.it16=d;break;case 17:PIEdisplayObject.it17=d;break;case 18:PIEdisplayObject.it18=d;break;case 19:PIEdisplayObject.it19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputText(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEitInput);c++){if(PIEitInputNames[c]==b){a=PIEitInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.it00=d;break;case 1:PIEinputObject.it01=d;break;case 2:PIEinputObject.it02=d;break;case 3:PIEinputObject.it03=d;break;case 4:PIEinputObject.it04=d;break;case 5:PIEinputObject.it05=d;break;case 6:PIEinputObject.it06=d;break;case 7:PIEinputObject.it07=d;break;case 8:PIEinputObject.it08=d;break;case 9:PIEinputObject.it09=d;break;case 10:PIEinputObject.it10=d;break;case 11:PIEinputObject.it11=d;break;case 12:PIEinputObject.it12=d;break;case 13:PIEinputObject.it13=d;break;case 14:PIEinputObject.it14=d;break;case 15:PIEinputObject.it15=d;break;case 16:PIEinputObject.it16=d;break;case 17:PIEinputObject.it17=d;break;case 18:PIEinputObject.it18=d;break;case 19:PIEinputObject.it19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitDisplay);b++){if(PIEitDisplayNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEdisplayObject.it00;break;case 1:c=PIEdisplayObject.it01;break;case 2:c=PIEdisplayObject.it02;break;case 3:c=PIEdisplayObject.it03;break;case 4:c=PIEdisplayObject.it04;break;case 5:c=PIEdisplayObject.it05;break;case 6:c=PIEdisplayObject.it06;break;case 7:c=PIEdisplayObject.it07;break;case 8:c=PIEdisplayObject.it08;break;case 9:c=PIEdisplayObject.it09;break;case 10:c=PIEdisplayObject.it10;break;case 11:c=PIEdisplayObject.it11;break;case 12:c=PIEdisplayObject.it12;break;case 13:c=PIEdisplayObject.it13;break;case 14:c=PIEdisplayObject.it14;break;case 15:c=PIEdisplayObject.it15;break;case 16:c=PIEdisplayObject.it16;break;case 17:c=PIEdisplayObject.it17;break;case 18:c=PIEdisplayObject.it18;break;case 19:c=PIEdisplayObject.it19;break;default:break}}return(c)}function PIEgetInputText(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEitInput);b++){if(PIEitInputNames[b]==a){d=true}}c="";if(d==true){switch(b-1){case 0:c=PIEinputObject.it00;break;case 1:c=PIEinputObject.it01;break;case 2:c=PIEinputObject.it02;break;case 3:c=PIEinputObject.it03;break;case 4:c=PIEinputObject.it04;break;case 5:c=PIEinputObject.it05;break;case 6:c=PIEinputObject.it06;break;case 7:c=PIEinputObject.it07;break;case 8:c=PIEinputObject.it08;break;case 9:c=PIEinputObject.it09;break;case 10:c=PIEinputObject.it10;break;case 11:c=PIEinputObject.it11;break;case 12:c=PIEinputObject.it12;break;case 13:c=PIEinputObject.it13;break;case 14:c=PIEinputObject.it14;break;case 15:c=PIEinputObject.it15;break;case 16:c=PIEinputObject.it16;break;case 17:c=PIEinputObject.it17;break;case 18:c=PIEinputObject.it18;break;case 19:c=PIEinputObject.it19;break;default:break}}return(c)}function PIEaddDualText(b,f,d,c,a,e){PIEaddInputSlider(b,f,d,c,a,e);PIEaddDisplaySlider(b,f,c,a,e)}function PIEaddDisplaySlider(c,f,d,b,e){var a;switch(PIEsDisplay){case 0:PIEdisplayObject.s00=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s00").min(d).max(b).step(e).name(c);break;case 1:PIEdisplayObject.s01=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s01").min(d).max(b).step(e).name(c);break;case 2:PIEdisplayObject.s02=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s02").min(d).max(b).step(e).name(c);break;case 3:PIEdisplayObject.s03=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s03").min(d).max(b).step(e).name(c);break;case 4:PIEdisplayObject.s04=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s04").min(d).max(b).step(e).name(c);break;case 5:PIEdisplayObject.s05=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s05").min(d).max(b).step(e).name(c);break;case 6:PIEdisplayObject.s06=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s06").min(d).max(b).step(e).name(c);break;case 7:PIEdisplayObject.s07=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s07").min(d).max(b).step(e).name(c);break;case 8:PIEdisplayObject.s08=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s08").min(d).max(b).step(e).name(c);break;case 9:PIEdisplayObject.s09=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s09").min(d).max(b).step(e).name(c);break;case 10:PIEdisplayObject.s10=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s10").min(d).max(b).step(e).name(c);break;case 11:PIEdisplayObject.s11=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s11").min(d).max(b).step(e).name(c);break;case 12:PIEdisplayObject.s12=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s12").min(d).max(b).step(e).name(c);break;case 13:PIEdisplayObject.s13=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s13").min(d).max(b).step(e).name(c);break;case 14:PIEdisplayObject.s14=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s14").min(d).max(b).step(e).name(c);break;case 15:PIEdisplayObject.s15=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s15").min(d).max(b).step(e).name(c);break;case 16:PIEdisplayObject.s16=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s16").min(d).max(b).step(e).name(c);break;case 17:PIEdisplayObject.s17=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s17").min(d).max(b).step(e).name(c);break;case 18:PIEdisplayObject.s18=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s18").min(d).max(b).step(e).name(c);break;case 19:PIEdisplayObject.s19=f;a=PIEdisplayGUI.add(PIEdisplayObject,"s19").min(d).max(b).step(e).name(c);break;default:return;break}PIEsDisplayHandles.push(a);PIEsDisplayNames.push(c);PIEsDisplay++}function PIEaddInputSlider(c,g,e,d,b,f){var a;switch(PIEsInput){case 0:PIEinputObject.s00=g;a=PIEinputGUI.add(PIEinputObject,"s00").min(d).max(b).step(f).name(c);break;case 1:PIEinputObject.s01=g;a=PIEinputGUI.add(PIEinputObject,"s01").min(d).max(b).step(f).name(c);break;case 2:PIEinputObject.s02=g;a=PIEinputGUI.add(PIEinputObject,"s02").min(d).max(b).step(f).name(c);break;case 3:PIEinputObject.s03=g;a=PIEinputGUI.add(PIEinputObject,"s03").min(d).max(b).step(f).name(c);break;case 4:PIEinputObject.s04=g;a=PIEinputGUI.add(PIEinputObject,"s04").min(d).max(b).step(f).name(c);break;case 5:PIEinputObject.s05=g;a=PIEinputGUI.add(PIEinputObject,"s05").min(d).max(b).step(f).name(c);break;case 6:PIEinputObject.s06=g;a=PIEinputGUI.add(PIEinputObject,"s06").min(d).max(b).step(f).name(c);break;case 7:PIEinputObject.s07=g;a=PIEinputGUI.add(PIEinputObject,"s07").min(d).max(b).step(f).name(c);break;case 8:PIEinputObject.s08=g;a=PIEinputGUI.add(PIEinputObject,"s08").min(d).max(b).step(f).name(c);break;case 9:PIEinputObject.s09=g;a=PIEinputGUI.add(PIEinputObject,"s09").min(d).max(b).step(f).name(c);break;case 10:PIEinputObject.s10=g;a=PIEinputGUI.add(PIEinputObject,"s10").min(d).max(b).step(f).name(c);break;case 11:PIEinputObject.s11=g;a=PIEinputGUI.add(PIEinputObject,"s11").min(d).max(b).step(f).name(c);break;case 12:PIEinputObject.s12=g;a=PIEinputGUI.add(PIEinputObject,"s12").min(d).max(b).step(f).name(c);break;case 13:PIEinputObject.s13=g;a=PIEinputGUI.add(PIEinputObject,"s13").min(d).max(b).step(f).name(c);break;case 14:PIEinputObject.s14=g;a=PIEinputGUI.add(PIEinputObject,"s14").min(d).max(b).step(f).name(c);break;case 15:PIEinputObject.s15=g;a=PIEinputGUI.add(PIEinputObject,"s15").min(d).max(b).step(f).name(c);break;case 16:PIEinputObject.s16=g;a=PIEinputGUI.add(PIEinputObject,"s16").min(d).max(b).step(f).name(c);break;case 17:PIEinputObject.s17=g;a=PIEinputGUI.add(PIEinputObject,"s17").min(d).max(b).step(f).name(c);break;case 18:PIEinputObject.s18=g;a=PIEinputGUI.add(PIEinputObject,"s18").min(d).max(b).step(f).name(c);break;case 19:PIEinputObject.s19=g;a=PIEinputGUI.add(PIEinputObject,"s19").min(d).max(b).step(f).name(c);break;default:return;break}a.onFinishChange(e);PIEsInputHandles.push(a);PIEsInputNames.push(c);PIEsInput++}function PIEchangeDisplaySlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsDisplay);c++){if(PIEsDisplayNames[c]==b){a=PIEsDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.s00=d;break;case 1:PIEdisplayObject.s01=d;break;case 2:PIEdisplayObject.s02=d;break;case 3:PIEdisplayObject.s03=d;break;case 4:PIEdisplayObject.s04=d;break;case 5:PIEdisplayObject.s05=d;break;case 6:PIEdisplayObject.s06=d;break;case 7:PIEdisplayObject.s07=d;break;case 8:PIEdisplayObject.s08=d;break;case 9:PIEdisplayObject.s09=d;break;case 10:PIEdisplayObject.s10=d;break;case 11:PIEdisplayObject.s11=d;break;case 12:PIEdisplayObject.s12=d;break;case 13:PIEdisplayObject.s13=d;break;case 14:PIEdisplayObject.s14=d;break;case 15:PIEdisplayObject.s15=d;break;case 16:PIEdisplayObject.s16=d;break;case 17:PIEdisplayObject.s17=d;break;case 18:PIEdisplayObject.s18=d;break;case 19:PIEdisplayObject.s19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputSlider(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEsInput);c++){if(PIEsInputNames[c]==b){a=PIEsInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.s00=d;break;case 1:PIEinputObject.s01=d;break;case 2:PIEinputObject.s02=d;break;case 3:PIEinputObject.s03=d;break;case 4:PIEinputObject.s04=d;break;case 5:PIEinputObject.s05=d;break;case 6:PIEinputObject.s06=d;break;case 7:PIEinputObject.s07=d;break;case 8:PIEinputObject.s08=d;break;case 9:PIEinputObject.s09=d;break;case 10:PIEinputObject.s10=d;break;case 11:PIEinputObject.s11=d;break;case 12:PIEinputObject.s12=d;break;case 13:PIEinputObject.s13=d;break;case 14:PIEinputObject.s14=d;break;case 15:PIEinputObject.s15=d;break;case 16:PIEinputObject.s16=d;break;case 17:PIEinputObject.s17=d;break;case 18:PIEinputObject.s18=d;break;case 19:PIEinputObject.s19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplaySlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsDisplay);b++){if(PIEsDisplayNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.s00;break;case 1:c=PIEdisplayObject.s01;break;case 2:c=PIEdisplayObject.s02;break;case 3:c=PIEdisplayObject.s03;break;case 4:c=PIEdisplayObject.s04;break;case 5:c=PIEdisplayObject.s05;break;case 6:c=PIEdisplayObject.s06;break;case 7:c=PIEdisplayObject.s07;break;case 8:c=PIEdisplayObject.s08;break;case 9:c=PIEdisplayObject.s09;break;case 10:c=PIEdisplayObject.s10;break;case 11:c=PIEdisplayObject.s11;break;case 12:c=PIEdisplayObject.s12;break;case 13:c=PIEdisplayObject.s13;break;case 14:c=PIEdisplayObject.s14;break;case 15:c=PIEdisplayObject.s15;break;case 16:c=PIEdisplayObject.s16;break;case 17:c=PIEdisplayObject.s17;break;case 18:c=PIEdisplayObject.s18;break;case 19:c=PIEdisplayObject.s19;break;default:break}}return(c)}function PIEgetInputSlider(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEsInput);b++){if(PIEsInputNames[b]==a){d=true}}c=0;if(d==true){switch(b-1){case 0:c=PIEinputObject.s00;break;case 1:c=PIEinputObject.s01;break;case 2:c=PIEinputObject.s02;break;case 3:c=PIEinputObject.s03;break;case 4:c=PIEinputObject.s04;break;case 5:c=PIEinputObject.s05;break;case 6:c=PIEinputObject.s06;break;case 7:c=PIEinputObject.s07;break;case 8:c=PIEinputObject.s08;break;case 9:c=PIEinputObject.s09;break;case 10:c=PIEinputObject.s10;break;case 11:c=PIEinputObject.s11;break;case 12:c=PIEinputObject.s12;break;case 13:c=PIEinputObject.s13;break;case 14:c=PIEinputObject.s14;break;case 15:c=PIEinputObject.s15;break;case 16:c=PIEinputObject.s16;break;case 17:c=PIEinputObject.s17;break;case 18:c=PIEinputObject.s18;break;case 19:c=PIEinputObject.s19;break;default:break}}return(c)}function PIEaddDualCheckbox(a,c,b){PIEaddInputCheckbox(a,c,b);PIEaddDisplayCheckbox(a,c)}function PIEaddDisplayCheckbox(b,d,c){var a;switch(PIEcbDisplay){case 0:PIEdisplayObject.cb00=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb00").name(b);break;case 1:PIEdisplayObject.cb01=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb01").name(b);break;case 2:PIEdisplayObject.cb02=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb02").name(b);break;case 3:PIEdisplayObject.cb03=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb03").name(b);break;case 4:PIEdisplayObject.cb04=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb04").name(b);break;case 5:PIEdisplayObject.cb05=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb05").name(b);break;case 6:PIEdisplayObject.cb06=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb06").name(b);break;case 7:PIEdisplayObject.cb07=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb07").name(b);break;case 8:PIEdisplayObject.cb08=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb08").name(b);break;case 9:PIEdisplayObject.cb09=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb09").name(b);break;case 10:PIEdisplayObject.cb10=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb10").name(b);break;case 11:PIEdisplayObject.cb11=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb11").name(b);break;case 12:PIEdisplayObject.cb12=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb12").name(b);break;case 13:PIEdisplayObject.cb13=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb13").name(b);break;case 14:PIEdisplayObject.cb14=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb14").name(b);break;case 15:PIEdisplayObject.cb15=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb15").name(b);break;case 16:PIEdisplayObject.cb16=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb16").name(b);break;case 17:PIEdisplayObject.cb17=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb17").name(b);break;case 18:PIEdisplayObject.cb18=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb18").name(b);break;case 19:PIEdisplayObject.cb19=d;a=PIEdisplayGUI.add(PIEdisplayObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbDisplayHandles.push(a);PIEcbDisplayNames.push(b);PIEcbDisplay++}function PIEaddInputCheckbox(b,d,c){var a;switch(PIEcbInput){case 0:PIEinputObject.cb00=d;a=PIEinputGUI.add(PIEinputObject,"cb00").name(b);break;case 1:PIEinputObject.cb01=d;a=PIEinputGUI.add(PIEinputObject,"cb01").name(b);break;case 2:PIEinputObject.cb02=d;a=PIEinputGUI.add(PIEinputObject,"cb02").name(b);break;case 3:PIEinputObject.cb03=d;a=PIEinputGUI.add(PIEinputObject,"cb03").name(b);break;case 4:PIEinputObject.cb04=d;a=PIEinputGUI.add(PIEinputObject,"cb04").name(b);break;case 5:PIEinputObject.cb05=d;a=PIEinputGUI.add(PIEinputObject,"cb05").name(b);break;case 6:PIEinputObject.cb06=d;a=PIEinputGUI.add(PIEinputObject,"cb06").name(b);break;case 7:PIEinputObject.cb07=d;a=PIEinputGUI.add(PIEinputObject,"cb07").name(b);break;case 8:PIEinputObject.cb08=d;a=PIEinputGUI.add(PIEinputObject,"cb08").name(b);break;case 9:PIEinputObject.cb09=d;a=PIEinputGUI.add(PIEinputObject,"cb09").name(b);break;case 10:PIEinputObject.cb10=d;a=PIEinputGUI.add(PIEinputObject,"cb10").name(b);break;case 11:PIEinputObject.cb11=d;a=PIEinputGUI.add(PIEinputObject,"cb11").name(b);break;case 12:PIEinputObject.cb12=d;a=PIEinputGUI.add(PIEinputObject,"cb12").name(b);break;case 13:PIEinputObject.cb13=d;a=PIEinputGUI.add(PIEinputObject,"cb13").name(b);break;case 14:PIEinputObject.cb14=d;a=PIEinputGUI.add(PIEinputObject,"cb14").name(b);break;case 15:PIEinputObject.cb15=d;a=PIEinputGUI.add(PIEinputObject,"cb15").name(b);break;case 16:PIEinputObject.cb16=d;a=PIEinputGUI.add(PIEinputObject,"cb16").name(b);break;case 17:PIEinputObject.cb17=d;a=PIEinputGUI.add(PIEinputObject,"cb17").name(b);break;case 18:PIEinputObject.cb18=d;a=PIEinputGUI.add(PIEinputObject,"cb18").name(b);break;case 19:PIEinputObject.cb19=d;a=PIEinputGUI.add(PIEinputObject,"cb19").name(b);break;default:return;break}a.onChange(c);PIEcbInputHandles.push(a);PIEcbInputNames.push(b);PIEcbInput++}function PIEchangeDisplayCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbDisplay);c++){if(PIEcbDisplayNames[c]==b){a=PIEcbDisplayHandles[c]}}if(a!=null){switch(c-1){case 0:PIEdisplayObject.cb00=d;break;case 1:PIEdisplayObject.cb01=d;break;case 2:PIEdisplayObject.cb02=d;break;case 3:PIEdisplayObject.cb03=d;break;case 4:PIEdisplayObject.cb04=d;break;case 5:PIEdisplayObject.cb05=d;break;case 6:PIEdisplayObject.cb06=d;break;case 7:PIEdisplayObject.cb07=d;break;case 8:PIEdisplayObject.cb08=d;break;case 9:PIEdisplayObject.cb09=d;break;case 10:PIEdisplayObject.cb10=d;break;case 11:PIEdisplayObject.cb11=d;break;case 12:PIEdisplayObject.cb12=d;break;case 13:PIEdisplayObject.cb13=d;break;case 14:PIEdisplayObject.cb14=d;break;case 15:PIEdisplayObject.cb15=d;break;case 16:PIEdisplayObject.cb16=d;break;case 17:PIEdisplayObject.cb17=d;break;case 18:PIEdisplayObject.cb18=d;break;case 19:PIEdisplayObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEchangeInputCheckbox(b,d){var a;var c;a=null;for(c=0;(a==null)&&(c<PIEcbInput);c++){if(PIEcbInputNames[c]==b){a=PIEcbInputHandles[c]}}if(a!=null){switch(c-1){case 0:PIEinputObject.cb00=d;break;case 1:PIEinputObject.cb01=d;break;case 2:PIEinputObject.cb02=d;break;case 3:PIEinputObject.cb03=d;break;case 4:PIEinputObject.cb04=d;break;case 5:PIEinputObject.cb05=d;break;case 6:PIEinputObject.cb06=d;break;case 7:PIEinputObject.cb07=d;break;case 8:PIEinputObject.cb08=d;break;case 9:PIEinputObject.cb09=d;break;case 10:PIEinputObject.cb10=d;break;case 11:PIEinputObject.cb11=d;break;case 12:PIEinputObject.cb12=d;break;case 13:PIEinputObject.cb13=d;break;case 14:PIEinputObject.cb14=d;break;case 15:PIEinputObject.cb15=d;break;case 16:PIEinputObject.cb16=d;break;case 17:PIEinputObject.cb17=d;break;case 18:PIEinputObject.cb18=d;break;case 19:PIEinputObject.cb19=d;break;default:break}a.updateDisplay()}}function PIEgetDisplayCheckbox(a){var d;var b;var c;d=false;for(b=0;(d==false)&&(b<PIEcbDisplay);b++){if(PIEcbDisplayNames[b]==a){d=true}}c=false;if(d==true){switch(b-1){case 0:c=PIEdisplayObject.cb00;break;case 1:c=PIEdisplayObject.cb01;break;case 2:c=PIEdisplayObject.cb02;break;case 3:c=PIEdisplayObject.cb03;break;case 4:c=PIEdisplayObject.cb04;break;case 5:c=PIEdisplayObject.cb05;break;case 6:c=PIEdisplayObject.cb06;break;case 7:c=PIEdisplayObject.cb07;break;case 8:c=PIEdisplayObject.cb08;break;case 9:c=PIEdisplayObject.cb09;break;case 10:c=PIEdisplayObject.cb10;break;case 11:c=PIEdisplayObject.cb11;break;case 12:c=PIEdisplayObject.cb12;break;case 13:c=PIEdisplayObject.cb13;break;case 14:c=PIEdisplayObject.cb14;break;case 15:c=PIEdisplayObject.cb15;break;case 16:c=PIEdisplayObject.cb16;break;case 17:c=PIEdisplayObject.cb17;break;case 18:c=PIEdisplayObject.cb18;break;case 19:c=PIEdisplayObject.cb19;break;default:break}}return(c)}function PIEaddDualCommand(a,b){PIEaddInputCommand(a,b);PIEaddDisplayCommand(a,b)}function PIEaddDisplayCommand(b,c){var a;switch(PIEcDisplay){case 0:PIEdisplayObject.c00=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c00").name(b);break;case 1:PIEdisplayObject.c01=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c01").name(b);break;case 2:PIEdisplayObject.c02=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c02").name(b);break;case 3:PIEdisplayObject.c03=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c03").name(b);break;case 4:PIEdisplayObject.c04=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c04").name(b);break;case 5:PIEdisplayObject.c05=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c05").name(b);break;case 6:PIEdisplayObject.c06=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c06").name(b);break;case 7:PIEdisplayObject.c07=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c07").name(b);break;case 8:PIEdisplayObject.c08=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c08").name(b);break;case 9:PIEdisplayObject.c09=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c09").name(b);break;case 10:PIEdisplayObject.c10=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c10").name(b);break;case 11:PIEdisplayObject.c11=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c11").name(b);break;case 12:PIEdisplayObject.c12=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c12").name(b);break;case 13:PIEdisplayObject.c13=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c13").name(b);break;case 14:PIEdisplayObject.c14=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c14").name(b);break;case 15:PIEdisplayObject.c15=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c15").name(b);break;case 16:PIEdisplayObject.c16=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c16").name(b);break;case 17:PIEdisplayObject.c17=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c17").name(b);break;case 18:PIEdisplayObject.c18=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c18").name(b);break;case 19:PIEdisplayObject.c19=c;a=PIEdisplayGUI.add(PIEdisplayObject,"c19").name(b);break;default:return;break}PIEcDisplayHandles.push(a);PIEcDisplayNames.push(b);PIEcDisplay++}function PIEaddInputCommand(b,c){var a;switch(PIEcInput){case 0:PIEinputObject.c00=c;a=PIEinputGUI.add(PIEinputObject,"c00").name(b);break;case 1:PIEinputObject.c01=c;a=PIEinputGUI.add(PIEinputObject,"c01").name(b);break;case 2:PIEinputObject.c02=c;a=PIEinputGUI.add(PIEinputObject,"c02").name(b);break;case 3:PIEinputObject.c03=c;a=PIEinputGUI.add(PIEinputObject,"c03").name(b);break;case 4:PIEinputObject.c04=c;a=PIEinputGUI.add(PIEinputObject,"c04").name(b);break;case 5:PIEinputObject.c05=c;a=PIEinputGUI.add(PIEinputObject,"c05").name(b);break;case 6:PIEinputObject.c06=c;a=PIEinputGUI.add(PIEinputObject,"c06").name(b);break;case 7:PIEinputObject.c07=c;a=PIEinputGUI.add(PIEinputObject,"c07").name(b);break;case 8:PIEinputObject.c08=c;a=PIEinputGUI.add(PIEinputObject,"c08").name(b);break;case 9:PIEinputObject.c09=c;a=PIEinputGUI.add(PIEinputObject,"c09").name(b);break;case 10:PIEinputObject.c10=c;a=PIEinputGUI.add(PIEinputObject,"c10").name(b);break;case 11:PIEinputObject.c11=c;a=PIEinputGUI.add(PIEinputObject,"c11").name(b);break;case 12:PIEinputObject.c12=c;a=PIEinputGUI.add(PIEinputObject,"c12").name(b);break;case 13:PIEinputObject.c13=c;a=PIEinputGUI.add(PIEinputObject,"c13").name(b);break;case 14:PIEinputObject.c14=c;a=PIEinputGUI.add(PIEinputObject,"c14").name(b);break;case 15:PIEinputObject.c15=c;a=PIEinputGUI.add(PIEinputObject,"c15").name(b);break;case 16:PIEinputObject.c16=c;a=PIEinputGUI.add(PIEinputObject,"c16").name(b);break;case 17:PIEinputObject.c17=c;a=PIEinputGUI.add(PIEinputObject,"c17").name(b);break;case 18:PIEinputObject.c18=c;a=PIEinputGUI.add(PIEinputObject,"c18").name(b);break;case 19:PIEinputObject.c19=c;a=PIEinputGUI.add(PIEinputObject,"c19").name(b);break;default:return;break}PIEcInputHandles.push(a);PIEcInputNames.push(b);PIEcInput++}function PIEchangeDisplayCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcDisplay);e++){if(PIEcDisplayNames[e]==c){a=PIEcDisplayHandles[e]}}if(a!=null){switch(e-1){case 0:PIEdisplayObject.c00=d;break;case 1:PIEdisplayObject.c01=d;break;case 2:PIEdisplayObject.c02=d;break;case 3:PIEdisplayObject.c03=d;break;case 4:PIEdisplayObject.c04=d;break;case 5:PIEdisplayObject.c05=d;break;case 6:PIEdisplayObject.c06=d;break;case 7:PIEdisplayObject.c07=d;break;case 8:PIEdisplayObject.c08=d;break;case 9:PIEdisplayObject.c09=d;break;case 10:PIEdisplayObject.c10=d;break;case 11:PIEdisplayObject.c11=d;break;case 12:PIEdisplayObject.c12=d;break;case 13:PIEdisplayObject.c13=d;break;case 14:PIEdisplayObject.c14=d;break;case 15:PIEdisplayObject.c15=d;break;case 16:PIEdisplayObject.c16=d;break;case 17:PIEdisplayObject.c17=d;break;case 18:PIEdisplayObject.c18=d;break;case 19:PIEdisplayObject.c19=d;break;default:break}PIEcDisplayNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEchangeInputCommand(c,b,d){var a;var e;a=null;for(e=0;(a==null)&&(e<PIEcInput);e++){if(PIEcInputNames[e]==c){a=PIEcInputHandles[e]}}if(a!=null){switch(e-1){case 0:PIEinputObject.c00=d;break;case 1:PIEinputObject.c01=d;break;case 2:PIEinputObject.c02=d;break;case 3:PIEinputObject.c03=d;break;case 4:PIEinputObject.c04=d;break;case 5:PIEinputObject.c05=d;break;case 6:PIEinputObject.c06=d;break;case 7:PIEinputObject.c07=d;break;case 8:PIEinputObject.c08=d;break;case 9:PIEinputObject.c09=d;break;case 10:PIEinputObject.c10=d;break;case 11:PIEinputObject.c11=d;break;case 12:PIEinputObject.c12=d;break;case 13:PIEinputObject.c13=d;break;case 14:PIEinputObject.c14=d;break;case 15:PIEinputObject.c15=d;break;case 16:PIEinputObject.c16=d;break;case 17:PIEinputObject.c17=d;break;case 18:PIEinputObject.c18=d;break;case 19:PIEinputObject.c19=d;break;default:break}PIEcInputNames[e-1]=b;a.name(b);a.updateDisplay()}}function PIEaddButton(a){var b;button=document.createElement("button");button.setAttribute("id",a);button.innerHTML=a;PIEtoplineElem.appendChild(button);return(button)}function PIEadjustCamera(a,c,b){PIEcamera.position.x=a;PIEcamera.position.y=c;PIEcamera.position.z=b}function PIEturnCamera(a,c,b){PIEcameraTarget.x=a;PIEcameraTarget.y=c;PIEcameraTarget.z=b;PIEcamera.lookAt(PIEcameraTarget)}function PIEsetCameraAspect(a){PIEcameraAspect=a;PIEcamera.aspect=a}function PIEsetCameraFOV(a){PIEcameraAngle=a;PIEcamera.fov=a}function PIEsetCameraDepth(a){PIEcamera.far=a}function PIEsetAreaOfInterest(c,b,a,d){PIEaoiTLX=c;PIEaoiTLY=b;PIEaoiBRX=a;PIEaoiBRY=d;PIEaoiW=a-c;PIEaoiH=b-d;PIEaoiAspect=PIEaoiW/PIEaoiH;PIEcameraAngle=30;PIEcameraZ=((PIEaoiH/2)/Math.tan((PIEcameraAngle*Math.PI/180)/2));PIEadjustDisplayScene()}function PIEadjustDisplayScene(){var b;var a;b=0;a=0;if(PIEcanvasAspect>PIEaoiAspect){b=PIEcanvasAspect*(PIEaoiTLY-PIEaoiBRY)-(PIEaoiBRX-PIEaoiTLX);b/=2}else{if(PIEcanvasAspect<PIEaoiAspect){a=(PIEaoiBRX-PIEaoiTLX)/PIEcanvasAspect-(PIEaoiTLY-PIEaoiBRY);a/=2}}PIEdisplayTLX=PIEaoiTLX-b;PIEdisplayTLY=PIEaoiTLY+a;PIEdisplayBRX=PIEaoiBRX+b;PIEdisplayBRY=PIEaoiBRY-a;PIEdisplayW=PIEaoiW+2*b;PIEdisplayH=PIEaoiH+2*a;PIEdisplayAspect=PIEdisplayW/PIEdisplayH;PIEadjustCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,PIEcameraZ);PIEturnCamera(PIEdisplayTLX+PIEdisplayW/2,PIEdisplayBRY+PIEdisplayH/2,0);PIEsetCameraFOV(2*Math.atan((PIEdisplayH/2)/PIEcameraZ)*180/Math.PI);PIEsetCameraAspect(PIEdisplayAspect)}function PIEremoveElement(b){var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}function PIEaddElement(a){a.receiveShadow=true;a.castShadow=true;PIEscene.add(a);a.dragStart=null;a.drag=null;a.dragEnd=null;a.hoverON=null;a.hoverOFF=null;a.click=null;PIEsceneElements.push(a);return(PIEsceneElements.length-1)}function PIEresetExperiment(){PIEstopAnimation();PIEanimationSpeed=1;PIEspeedElem.innerHTML=PIEanimationSpeed;resetExperiment();PIEshowInputPanel();PIErender()}function PIEspeedupAnimation(){if(PIEanimationSpeed<PIEmaxAnimationSpeed){PIEanimationSpeed*=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEslowdownAnimation(){if(PIEanimationSpeed>PIEminAnimationSpeed){PIEanimationSpeed/=2}PIEspeedElem.innerHTML=PIEanimationSpeed}function PIEstartAnimation(){if(PIEanimationON==false){PIElastUpdateTime=Date.now();AnimationStart();PIEpauseOffset=0;PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=true;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEstartButton.style.display="none";PIEstopButton.style.display="inline";PIEshowDisplayPanel();PIEanimate()}}function PIEstopAnimation(){if(PIEanimationON==true){PIEpauseOffset=0;AnimationStop();PIEcurrentTime=0;PIEoffsetTime=0;PIEanimationON=false;PIEanimationPaused=false;PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="hidden";PIEstopButton.style.display="none";PIEstartButton.style.display="inline";PIEshowInputPanel()}}function PIEanimate(){var b;var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){b=Date.now();a=(b-PIElastUpdateTime)*PIEanimationSpeed;if(a>0){PIEcurrentTime+=a;PIEoffsetTime=a;PIElastUpdateTime=b;updateExperimentElements(PIEcurrentTime,PIEoffsetTime)}requestAnimationFrame(PIEanimate);PIErender()}}function PIErender(){PIErenderer.render(PIEscene,PIEcamera)}function PIEpauseAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==false)){a=Date.now();PIEpauseOffset=(a-PIElastUpdateTime);PIEpauseButton.style.display="none";PIEpauseButton.style.visibility="hidden";PIEresumeButton.style.display="inline";PIEresumeButton.style.visibility="visible";PIEanimationPaused=true}}function PIEresumeAnimation(){var a;if((PIEanimationON==true)&&(PIEanimationPaused==true)){PIEpauseButton.style.display="inline";PIEpauseButton.style.visibility="visible";PIEresumeButton.style.display="none";PIEresumeButton.style.visibility="hidden";a=Date.now();PIElastUpdateTime=a-PIEpauseOffset;PIEanimationPaused=false;PIEanimate()}}function PIEadjustAnimationTime(a){PIEcurrentTime-=a}function PIEdefaultHoverON(a){if((a!=null)&&((a.hoverON)!=null)){a.hoverON(a)}PIErender()}function PIEdefaultHoverOFF(a){if((a!=null)&&((a.hoverOFF)!=null)){a.hoverOFF(a)}PIErender()}function PIEdefaultDragStart(a){if((a.dragStart)!=null){a.dragStart(a)}PIErender()}function PIEdefaultDrag(a,b){if((a.drag)!=null){a.drag(a,b)}else{a.position.x=b.x;a.position.y=b.y;a.position.z=b.z}PIErender()}function PIEdefaultDragEnd(a){if((a.dragEnd)!=null){a.dragEnd(a)}PIErender()}function PIEsetHoverON(a,b){a.hoverON=b}function PIEsetHoverOFF(a,b){a.hoverOFF=b}function PIEsetDragStart(a,b){a.dragStart=b}function PIEsetDrag(a,b){a.drag=b}function PIEsetDragEnd(a,b){a.dragEnd=b}function PIEdragElement(a){PIEdragElements.push(a)}function PIEremoveDragElement(b){var a;var c;c=false;for(a=0;(c==false)&&(a<PIEdragElements.length);a++){if(PIEdragElements[a]==b){c=true}}if(c==true){while(a<=PIEdragElements.length){PIEdragElements[a-1]=PIEdragElements[a];a++}PIEdragElements.pop()}}function PIEmouseMove(b){var a;b.defaultPrevented=true;PIEmouseP.x=(b.clientX/PIEcanvasW)*2-1;PIEmouseP.y=-(b.clientY/PIEcanvasH)*2+1;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);if(PIEselectedDrag!=null){PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect);PIEdefaultDrag(PIEselectedDrag,PIEdragIntersect.sub(PIEdragOffset))}else{a=PIEraycaster.intersectObjects(PIEsceneElements);if(a.length>0){PIEdragPlane.setFromNormalAndCoplanarPoint(PIEcamera.getWorldDirection(PIEdragPlane.normal),a[0].object.position);if(PIEselectedHover!=a[0].object){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=a[0].object;PIEdefaultHoverON(PIEselectedHover)}PIEscreenElem.style.cursor="pointer"}else{if(PIEselectedHover!=null){PIEdefaultHoverOFF(PIEselectedHover);PIEselectedHover=null;PIEscreenElem.style.cursor="auto"}}}}function PIEmouseDown(b){var a;b.defaultPrevented=true;PIEselectedDrag=null;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);a=PIEraycaster.intersectObjects(PIEdragElements);if(a.length>0){PIEselectedDrag=a[0].object;if(PIEraycaster.ray.intersectPlane(PIEdragPlane,PIEdragIntersect)){PIEdragOffset.copy(PIEdragIntersect).sub(PIEselectedDrag.position)}PIEscreenElem.style.cursor="move";PIEdefaultDragStart(PIEselectedDrag)}}function PIEmouseUp(b){var a;b.defaultPrevented=true;if(PIEselectedDrag!=null){PIEdefaultDragEnd(PIEselectedDrag);PIEselectedDrag=null}PIEscreenElem.style.cursor="auto"}function PIEsetClick(a,b){a.click=b}function PIEresetClick(a,b){a.click=null}function PIEmouseClick(c){var b;var a;var d;c.defaultPrevented=true;PIEraycaster.setFromCamera(PIEmouseP,PIEcamera);b=PIEraycaster.intersectObjects(PIEsceneElements);for(a=0;a<b.length;a++){d=b[a].object;if(d.click!=null){d.click(d)}}}var PIEtableData=[];var PIEtableRows=[];var PIEtableNames=[];var PIEtables=[];var PIEcurrentTable;var PIEdraggedTable;var PIEtableChangeHandlers=[];function PIEtableDragStart(b){var a;var c;PIEdraggedTable=b.target;a=window.getComputedStyle(PIEdraggedTable,null);c=(parseInt(a.getPropertyValue("left"))-b.clientX)+","+(parseInt(a.getPropertyValue("top"))-b.clientY);b.dataTransfer.setData("Text",c);b.dataTransfer.dropEffect="move";b.dataTransfer.setData("aTable",c);return(false)}function PIEtableDrop(a){var b;if(PIEdraggedTable!=null){b=a.dataTransfer.getData("Text").split(",");PIEdraggedTable.style.left=(a.clientX+parseInt(b[0],10))+"px";PIEdraggedTable.style.top=(a.clientY+parseInt(b[1],10))+"px";PIEdraggedTable=null;a.stopPropagation();a.preventDefault();return false}}function PIEtableDragEnter(a){a.preventDefault();return(false)}function PIEtableDragOver(a){a.preventDefault();return(false)}function PIEtableSetInputChange(a){var b;var d;var c;PIEtableChangeHandlers[PIEcurrentTable]=a;for(b=0;(b<PIEtableRows[PIEcurrentTable].length);b++){for(d=0;(d<PIEtableData[PIEcurrentTable][b].length);d++){if((PIEtableData[PIEcurrentTable][b][d]!=null)&&(PIEtableData[PIEcurrentTable][b][d].children.length>0)){c=PIEtableData[PIEcurrentTable][b][d].children[0];c.addEventListener("change",PIEtableInputChange,false)}}}}function PIEtableInputChange(a){a.preventDefault();PIEtableInputHandleEvent(a,PIEtableChangeHandlers);return(false)}function PIEtableInputHandleEvent(d,g){var f;var e;var h;var c;var a;var b;var i;i=false;f=d.target;for(e=0;(i==false)&&(e<PIEtables.length);e++){for(h=0;(i==false)&&(h<PIEtableRows[e].length);h++){for(c=0;(i==false)&&(c<PIEtableData[e][h].length);c++){if((PIEtableData[e][h][c]!=null)&&(f==PIEtableData[e][h][c].children[0])){i=true}}}}if(i==true){e--;h--;c--;if(g[e]!=null){g[e](h,c,f.value)}}}function PIEtableSelect(c){var a;var b;PIEcurrentTable=0;for(a=0;(a<PIEtableNames.length);a++){if(c==PIEtableNames[a]){PIEcurrentTable=a}}}function PIEcreateTable(i,n,g,d){var c;var b;var m;var f;var a;var h;var l;var k;var j;var e;PIEtableChangeHandlers.push(null);PIEtableNames.push(i);PIEtableRows.push(new Array(0));PIEtableData.push(new Array(0));PIEtableChangeHandlers.push(null);PIEcurrentTable=PIEtableNames.length-1;c=document.createElement("div");c.draggable=true;c.addEventListener("dragstart",PIEtableDragStart,false);c.style.border="2px solid white";c.style.borderRadius="10px";c.style.display="inline-block";c.style.position="absolute";c.style.top="50px";c.style.color="white";document.body.appendChild(c);b=document.createElement("div");b.style.display="inline-block";b.style.width="100%";c.id="obstab";b.style.padding="0px";c.appendChild(b);m=document.createElement("p");m.style.display="inline-block";m.style.width="100%";m.style.margin="auto";m.style.border="2 px solid white";m.style.borderRadius="10px";m.style.backgroundColor="#0020AA";b.appendChild(m);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="TableAdd.png";a.alt="add";a.height="16";a.width="16";a.style.display="inline";f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";a=document.createElement("img");a.src="TableDelete.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";a=document.createElement("span");a.style.padding="5px";a.style.margin="auto";a.style.align="center";a.innerHTML="<b>"+i+"</b>";m.appendChild(a);f=document.createElement("button");f.style.background="none";f.style.border="none";f.style.boxSizing="border-box";f.style.align="right";f.addEventListener("click",PIEtoggleTable,false);m.appendChild(f);a=document.createElement("img");a.src="TableFold.png";a.alt="delete";a.height="16";a.width="16";a.style.display="inline";f.appendChild(a);a=document.createElement("div");h=document.createElement("table");h.style.display="inline-block";h.style.border="1px solid white";h.style.borderRadius="10px";h.style.padding="0px";h.style.backgroundColor="#0040BB";PIEtables.push(h);a.appendChild(h);c.appendChild(a);for(j=0;j<n;j++){for(e=0;e<g;e++){if(j==0){k=PIEcreateTableCell(j,e,d)}else{k=PIEcreateTableCell(j,e,false)}}}PIEupdateTable(PIEtables[PIEcurrentTable])}function PIEtoggleTable(e){var g;var c;var a;var h;var f;var d;var b;e=e||window.event;e.defaultPrevented=true;g=null;if(e.target){g=e.target}else{if(e.srcElement){g=e.srcElement}}if(g!=null){if(g.nodeType==3){g=g.parentNode}a=((g.parentNode).parentNode).parentNode;h=a.children;for(d=0;(d<h.length);d++){f=h[d].children;for(b=0;(b<f.length);b++){if(f[b].nodeName=="TABLE"){c=f[b];if(c.style.display=="inline-block"){c.style.display="none"}else{c.style.display="inline-block"}}}}}}function PIEupdateTable(){var c;var d;var a;var b;PIEtables[PIEcurrentTable].innerHTML="";for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){a=PIEtableRows[PIEcurrentTable][c];PIEtables[PIEcurrentTable].appendChild(a);for(d=0;(d<PIEtableData[PIEcurrentTable][c].length);d++){b=PIEtableData[PIEcurrentTable][c][d];a.appendChild(b)}}}function PIEexpandCell(a){if((a.target.size+6)<a.target.value.length){a.target.size=a.target.value.length-6}}function PIEcreateInputElement(b,c){var a;a=document.createElement("input");a.style.color="#FFFFFF";a.style.backgroundColor="#0060CC";a.style.border="2px solid red";if(b>=7){a.size=(b-6)}else{a.size=1}a.addEventListener("keyup",PIEexpandCell,false);if(PIEtableChangeHandlers[PIEcurrentTable]!=null){a.addEventListener("change",PIEtableInputChange,false)}a.addEventListener("change",PIEtableInputChange,false);a.value=c;return(a)}function PIEsetColumnInput(a,b,e){var d;var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length)&&(PIEtableRows[PIEcurrentTable][c]!=null);c++){if(PIEtableData[PIEcurrentTable][c].length>a){if(PIEtableData[PIEcurrentTable][c][a]!=null){PIEtableData[PIEcurrentTable][c][a].innerHTML="";PIEtableData[PIEcurrentTable][c][a].appendChild(PIEcreateInputElement(b,e))}}}}function PIEsetRowInput(e,a,d){var c;var b;if((PIEtableRows[PIEcurrentTable].length>e)&&(PIEtableRows[PIEcurrentTable][e]!=null)){for(b=0;(b<PIEtableData[PIEcurrentTable][e].length);b++){if(PIEtableData[PIEcurrentTable][e][b]!=null){PIEtableData[PIEcurrentTable][e][b].innerHTML="";PIEtableData[PIEcurrentTable][e][b].appendChild(PIEcreateInputElement(a,d))}}}}function PIEsetCellInput(e,a,b,d){var c;while(PIEtableRows[PIEcurrentTable].length<=e){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][e]==null){PIEtableRows[PIEcurrentTable][e]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][e].length<=a){PIEtableData[PIEcurrentTable][e].push(null)}if(PIEtableData[PIEcurrentTable][e][a]==null){PIEtableData[PIEcurrentTable][e][a]=document.createElement("td")}PIEtableData[PIEcurrentTable][e][a].innerHTML="";c=PIEcreateInputElement(b,d);PIEtableData[PIEcurrentTable][e][a].appendChild(c)}function PIEcreateTableCell(c,b,d){var a;a=(d==true)?"th":"td";while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=b){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][b]==null){PIEtableData[PIEcurrentTable][c][b]=document.createElement(a)}else{PIEtableData[PIEcurrentTable][c][b].innerHTML=""}}function PIEupdateTableRow(c,a){var b;for(b=0;b<a.length;b++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableColumn(b,a){var c;for(c=0;c<a.length;c++){PIEupdateTableCell(c,b,a[b])}}function PIEupdateTableCell(c,a,b){while(PIEtableRows[PIEcurrentTable].length<=c){PIEtableRows[PIEcurrentTable].push(null);PIEtableData[PIEcurrentTable].push(new Array(0))}if(PIEtableRows[PIEcurrentTable][c]==null){PIEtableRows[PIEcurrentTable][c]=document.createElement("tr")}while(PIEtableData[PIEcurrentTable][c].length<=a){PIEtableData[PIEcurrentTable][c].push(null)}if(PIEtableData[PIEcurrentTable][c][a]==null){PIEtableData[PIEcurrentTable][c][a]=document.createElement("td")}if(PIEtableData[PIEcurrentTable][c][a].children.length==0){PIEtableData[PIEcurrentTable][c][a].innerHTML=b}else{PIEtableData[PIEcurrentTable][c][a].children[0].value=b}}function PIEsetTableRowStyle(d,a,c){var b;if(d<PIEtableRows[PIEcurrentTable].length){for(b=0;(b<PIEtableData[PIEcurrentTable][d].length);b++){PIEsetTableCellStyle(d,b,a,c)}}}function PIEsetTableColumnStyle(a,b,d){var c;for(c=0;(c<PIEtableRows[PIEcurrentTable].length);c++){if(a<PIEtableData[PIEcurrentTable][c].length){PIEsetTableCellStyle(c,a,b,d)}}}function PIEsetTableCellStyle(d,a,b,c){if(d<PIEtableRows[PIEcurrentTable].length){if(a<PIEtableData[PIEcurrentTable][rowI].length){if(b=="color"){PIEtableData[PIEcurrentTable][d][a].style.color=c}else{if(b=="backgroundColor"){PIEtableData[PIEcurrentTable][d][a].style.backgroundColor=c}else{if(b=="margin"){PIEtableData[PIEcurrentTable][d][a].style.margin=c}else{if(b=="padding"){PIEtableData[PIEcurrentTable][d][a].style.padding=c}else{if(b=="border"){PIEtableData[PIEcurrentTable][d][a].style.border=c}}}}}}}};

function PIEcreateTable2(i, n, g, d) {
    var c;
    var b;
    var m;
    var f;
    var a;
    var h;
    var l;
    var k;
    var j;
    var e;
    PIEtableChangeHandlers.push(null);
    PIEtableNames.push(i);
    PIEtableRows.push(new Array(0));
    PIEtableData.push(new Array(0));
    PIEtableChangeHandlers.push(null);
    PIEcurrentTable = PIEtableNames.length - 1;
    c = document.createElement("div");
    c.draggable = true;
    c.id="ltab";
    c.addEventListener("dragstart", PIEtableDragStart, false);
    c.style.border = "2px solid white";
    c.style.borderRadius = "10px";
    c.style.display = "inline-block";
    c.style.position = "absolute";
    c.style.top = "50px";
    c.style.color = "white";
    document.body.appendChild(c);
    b = document.createElement("div");
    b.style.display = "inline-block";
    b.style.width = "100%";
    b.style.padding = "0px";
    c.appendChild(b);
    m = document.createElement("p");
    m.style.display = "inline-block";
    m.style.width = "100%";
    m.style.margin = "auto";
    m.style.border = "2 px solid white";
    m.style.borderRadius = "10px";
    m.style.backgroundColor = "#0020AA";
    b.appendChild(m);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "TableAdd.png";
    a.alt = "add";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "TableDelete.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    a = document.createElement("span");
    a.style.padding = "5px";
    a.style.margin = "auto";
    a.style.align = "center";
    a.innerHTML = "<b>" + i + "</b>";
    m.appendChild(a);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    f.style.align = "right";
    f.addEventListener("click", PIEtoggleTable, false);
    m.appendChild(f);
    a = document.createElement("img");
    a.src = "TableFold.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f.appendChild(a);
    a = document.createElement("div");
    h = document.createElement("table");
    h.style.display = "inline-block";
    h.style.border = "1px solid white";
    h.style.borderRadius = "10px";
    h.style.padding = "0px";
    h.style.backgroundColor = "#0040BB";
    PIEtables.push(h);
    a.appendChild(h);
    c.appendChild(a);
    for (j = 0; j < n; j++) {
        for (e = 0; e < g; e++) {
            if (j == 0) {
                k = PIEcreateTableCell(j, e, d)
            } else {
                k = PIEcreateTableCell(j, e, false)
            }
        }
    }
    PIEupdateTable(PIEtables[PIEcurrentTable])
}







  //GLOBAL VARIABLES

  var EModeCheck=1;     //Check for status of Experiment Mode checkboxes
  var WAModeCheck=0;    //Check for water analogy mode checkboxes
  var LModeCheck=0;     //Check for Learning Mode checkbox

  var CircuitStatus=0;  //CIRCUIT ON:1  OFF:0

  var Switch1;
  var Switch2;
  var bulb1;
  var bulb2;
  var TextGroup;

  var circuitCurrent=0;
  var voltmeter1;
  var voltmeter2;
  var voltmeter3;
  var batteryVoltmeter;

  var currentText1,currentText2;
  var voltText1,voltText2,voltText3,batteryVoltText1,batteryVoltText2,eqVoltText;

  var trials=1;

  var plane;

  var tube1;
  var tube2;
  var tube3;
  var toppipe;
  var bottompipe;
  var leftpipe;
  var motor;
  var motortext;
  var r1text;
  var r2text;
  var r3text;
  var vtext;
  var toppipeWater;
  var bottompipeWater;
  var leftpipeWater;
  var tube1Water;
  var tube2Water;
  var tube3Water;
  var tophide;
  var bottomhide;
  var lefthide;
  var tophide;

  var LMCircuitLeft;
  var LMCircuitRight;

  var LMWtext1;
  var LMWtext2;
  var LMrtext1;
  var LMrtext2;
  var LMrtext3;
  var LMrtext4;
  var LMvtext1;
  var LMvtext2;
  var LMvtext3;
  var LMvtext5;
  var LMvtext4;
  var LMvtext6;
  var LMamptext1;
  var LMamptext2;
  var LMv1;
  var LMv2;
  var LMb1;
  var LMb2;

  var f1,f2;

  var LMtrials=0;

  var LMSwitch1;
  var LMSwitch2;
  var LMbulb1;
  var LMbulb2;

  var LMtitle,backBox;

  var LMR1;
  var LMR2;
  var LMX=-1;
  var LMR1Value;
  var LMR2Value;
  var LMEQValue;

  var yellowVal=0;

  var helpContent;
  function initialiseHelp() {
      helpContent="";
      helpContent = helpContent + "<h2>Resistances in series help</h2>";
      helpContent = helpContent + "<h3>About the experiment</h3>";
      helpContent = helpContent + "<p>The experiment shows a circuit with three resistances connected in series with a cell. Voltmeters are connected across the resistances and battery and an ammeter is provided to get circuit current. A switch is provided to start the circuit. Also an equivalent circuit is shown as well.</p>";
      helpContent = helpContent + "<h3>Controls</h3>";
      helpContent = helpContent + "<p>The experiment can be controlled by the provided control panel. Values of voltage of the cell, and the three resistors can be set using the input sliders provided. Once values are set click START button to take readings. Once START is clicked, automatically the equivalent circuit will show the circuit with only one resistor (the equivalent resistance) and the current voltage across it.</p>";
      helpContent = helpContent + "<h3>Modes</h3>";
      helpContent = helpContent + "<p>There are three modes: <ul><li>Experiment Mode</li><li>Water Analogy Mode</li><li>Learning Mode</li></ul></p><p>The experiment mode allows the series resistance experiment to be performed. The water analogy mode shows the circuit in Hydraulic analogy. In water analogy mode, one can choose the three resistances (againt motion of water) and voltage (representing pressure difference) and the water flow through the corresponding pipe system will be shown on the click of START. </p>";
      helpContent = helpContent + "<h3>Learning Mode</h3><p>The learning mode shows a series resistive circuit with two resistances having fixed values and one having an unknown resistance. The user can change the Req or the equivalent resistor value such that current in both the circuit becomes same. When current in both circuit is same, using the formula R1+R2+X=Req the user can calculate the unknown resistance value. This can be then input via the popup message for verification. </p>"
      helpContent = helpContent + "<h3>Observation</h3>";
      helpContent = helpContent + "<p>A predefined observation table is present at the top left side of the experiment which updates itself with the required readings upon the click of START. This table supports maximum of 4 readings and has to be reset afterwards by clicking the reset button. Also the learning mode has its own table which records the values and the number of attempts taken to solve it. </p>";
      helpContent = helpContent + "<h2>Happy Experimenting</h2>";
      PIEupdateHelp(helpContent);
  }

  var infoContent;
  function initialiseInfo() {
      infoContent =  "";
      infoContent = infoContent + "<h2>Resistances in series concepts</h2>";
      infoContent = infoContent + "<h3>About the experiment</h3>";
      infoContent = infoContent + "<p>The experiment shows a circuit with three resistances connected in series with a cell. Voltmeters are connected across the resistances and battery and an ammeter is provided to get circuit current. A switch is provided to start the circuit. Also an equivalent circuit is shown as well.</p>";

      infoContent = infoContent + "<h3>Series Resistance Circuit</h3>";
      infoContent = infoContent + "<p>Resistors are said to be connected in series when they are together in a single line resulting in a common current flowing through them. Resistors in series have a Common Current flowing through them because the current that flows through one resistor must also flow through the others as it can only take one path. Resistors in series network can be replaced by one single equivalent resistor REQ. This equivalent resistor can be defined as a single value of resistance that can replace any number of resistors in series without altering the values of the current or the voltage in the circuit. For series resistor circuit the equivalent resistor is given by: <li>Rtotal = R1 + R2 + R3 + ….. Rn</li></p><p>The voltage across each resistor connected in series follows different rules to that of the series current. But the sum of voltages across all resistors in series should be same as that of the voltage across the equivalent resistance. </p>";


      infoContent = infoContent + "<h3>Water Analogy:</h3>";
      infoContent = infoContent + "<p>In water/Hydraulic analogy the flow of fluid in a system of pipes is considered equivalent to the flow of current in an electrical circuit. Pipes of larger radius offer less resistance to the flow of fluid, hence having a higher resistance compared to pipes of lower radius which limit the flow of the fluid and hence has higher resistance. When connected in series the flow of fluid gets affected due to the different radius of the pipes. The corresponding/similar elements in water analogy is <ul><li>Voltage - Pressure</li><li>Resistance - Radius of pipe</li><li>Current - Rate of flow</li></ul></p>";

      infoContent = infoContent + "<h2>Happy Experimenting</h2>";
      PIEupdateInfo(infoContent);
  }


  function PIEadjustDisplayScene2() {
      var b;
      var a;
      b = 0;
      a = 0;
      if (PIEcanvasAspect > PIEaoiAspect) {
          b = PIEcanvasAspect * (PIEaoiTLY - PIEaoiBRY) - (PIEaoiBRX - PIEaoiTLX);
          b /= 2
      } else {
          if (PIEcanvasAspect < PIEaoiAspect) {
              a = (PIEaoiBRX - PIEaoiTLX) / PIEcanvasAspect - (PIEaoiTLY - PIEaoiBRY);
              a /= 2
          }
      }
      PIEdisplayTLX = PIEaoiTLX - b;
      PIEdisplayTLY = PIEaoiTLY + a;
      PIEdisplayBRX = PIEaoiBRX + b;
      PIEdisplayBRY = PIEaoiBRY - a;
      PIEdisplayW = PIEaoiW + 2 * b;
      PIEdisplayH = PIEaoiH + 2 * a;
      PIEdisplayAspect = PIEdisplayW / PIEdisplayH;
      PIEadjustCamera(PIEdisplayTLX + PIEdisplayW  , PIEdisplayBRY + PIEdisplayH , PIEcameraZ);
      PIEturnCamera(PIEdisplayTLX + PIEdisplayW , PIEdisplayBRY + PIEdisplayH , 0);
      PIEsetCameraFOV(2 * Math.atan((PIEdisplayH ) / PIEcameraZ) * 180 / Math.PI);
      PIEsetCameraAspect(PIEdisplayAspect)
  }


  function loadExperimentElements(){
    PIEsetExperimentTitle("Resistances in series");
    PIEsetDeveloperName("Sreekanth T M");

    PIEscene.background = new THREE.Color("#003311");
    PIEinputGUI.width = 200;
    //Adding checkboxes
    PIEaddInputCheckbox("Learning Mode", false, loadLearningMode);
    PIEaddInputCheckbox("Water Analogy", false, loadWaterAnalogy);
    PIEaddInputCheckbox("Experiment", true, loadExpMode);


    if(window.innerWidth<=480){
     PIEsetAreaOfInterest(-40,20,40,-20);
    }
    else{
      PIEsetAreaOfInterest(-25,12,25,-12);
    }

    //PIEsInputHandles.push(a);
    //PIEinputGUI.domElement.style.display = "none";
    //document.getElementById("slid").style.visibility="hidden";
    //PIEinputObject.s00 = 0;


    //LOADING Elements **1)EXP MODE
    var CircuitLeft = loadCircuit(0,0);
    //CircuitLeft.visible=false;
    var CircuitRight = loadCircuit(0.0);
    //CircuitRight.visible=false;
    CircuitRight.position.x=16;


    LMCircuitLeft = loadCircuit(3,1);
    LMCircuitLeft.visible=false;
    LMCircuitRight = loadCircuit(3,1);
    LMCircuitRight.position.x=16;
    LMCircuitRight.visible=false;


    //loading INFO and HELP
    initialiseInfo();
    initialiseHelp();

    //load switches
    Switch1 = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.1,0),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(Switch1);
    Switch1.position.set(-6.6,-4.6,0);
    Switch1.rotation.z+=Math.PI/4;
    Switch1.castShadow=false;
    //Switch1.visible=false;

    Switch2 = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.1,0),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(Switch2);
    Switch2.position.set(9.4,-4.6,0);
    Switch2.rotation.z+=Math.PI/4;
    Switch2.castShadow=false;
    //Switch2.visible=false;

    //LIGHTS
    bulb1 = new THREE.Mesh(new THREE.SphereGeometry(0.65,32,32),new THREE.MeshBasicMaterial({color:"white",transparent:true,opacity:0.8}));
    PIEaddElement(bulb1);
    bulb1.position.set(-12,-5.9,0);
    //bulb1.visible=false;

    bulb2 = new THREE.Mesh(new THREE.SphereGeometry(0.65,32,32),new THREE.MeshBasicMaterial({color:"white",transparent:true,opacity:0.8}));
    PIEaddElement(bulb2);
    bulb2.position.set(4,-5.9,0);
    //bulb2.visible=false;



    //LEARNING MODE SWITCHES & BULBS
    //load switches
    LMSwitch1 = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.1,0),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(LMSwitch1);
    LMSwitch1.position.set(-6.6,-4.6,3);
    LMSwitch1.rotation.z+=Math.PI/4;
    LMSwitch1.castShadow=false;
    LMSwitch1.visible=false;

    LMSwitch2 = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.1,0),new THREE.MeshBasicMaterial({color:"red"}));
    PIEaddElement(LMSwitch2);
    LMSwitch2.position.set(9.4,-4.6,3);
    LMSwitch2.rotation.z+=Math.PI/4;
    LMSwitch2.castShadow=false;
    LMSwitch2.visible=false;

    //LIGHTS
    LMbulb1 = new THREE.Mesh(new THREE.SphereGeometry(0.65,32,32),new THREE.MeshBasicMaterial({color:"white",transparent:true,opacity:0.8}));
    PIEaddElement(LMbulb1);
    LMbulb1.position.set(-12,-5.9,3);
    LMbulb1.visible=false;

    LMbulb2 = new THREE.Mesh(new THREE.SphereGeometry(0.65,32,32),new THREE.MeshBasicMaterial({color:"white",transparent:true,opacity:0.8}));
    PIEaddElement(LMbulb2);
    LMbulb2.position.set(4,-5.9,3);
    LMbulb2.visible=false;




    //LOAD TEXT
    loadText();


    var loader=new THREE.FontLoader();
    loader.load('optimer.json',function(font){
      var geometry = new THREE.TextGeometry( "WATER ANALOGY MODE", {
        font: font,
        size: 1,
        height: 0.05,
      });
      var material = new THREE.MeshBasicMaterial({color:"white"});
      watitle = new THREE.Mesh(geometry,material);
      watitle.position.set(-9,0,2);
      watitle.castShadow=false;
      PIEaddElement(watitle);
      watitle.visible=false;

      var geometry = new THREE.TextGeometry( "SELECT VOLTAGE, R1, R2, R3 AND START", {
        font: font,
        size: 0.3,
        height: 0.05,
      });
      var material = new THREE.MeshBasicMaterial({color:"white"});
      watitle2 = new THREE.Mesh(geometry,material);
      watitle2.position.set(-5,-1,2);
      watitle2.castShadow=false;
      watitle2.visible=false;
      PIEaddElement(watitle2);
      PIErender();
    });


    backBox=new THREE.Mesh(new THREE.BoxGeometry(18,1.5,0),new THREE.MeshLambertMaterial({color:"#FF6633"}));
    PIEaddElement(backBox);
    backBox.position.set(0,6.25,3);
    PIEsetClick(backBox,verifyAnswer);
    backBox.visible=false;

    PIEresize();
    //INPUT SLIDERS


    var FizzyText = function(){
      this.Voltage=5;
      this.R1=1;
      this.R2=1;
      this.R3=1;
      this.Req=1;
      this.Volt=10;
    }

    var text=new FizzyText();
    f1 = PIEinputGUI.addFolder("Experiment Controls");
    f1.add(text,'Voltage',1,15).step(1).onFinishChange(handleVoltage);
    f1.add(text,'R1',1,5).step(1).onFinishChange(handleR1);
    f1.add(text,'R2',1,5).step(1).onFinishChange(handleR2);
    f1.add(text,'R3',1,5).step(1).onFinishChange(handleR3);

    f1.open();

    f2 = PIEinputGUI.addFolder("Learning Controls");
    f2.add(text,'Req',1,15).step(1).onFinishChange(handleReq);
    f2.add(text,"Volt",1,15).step(1).onFinishChange(handleLearningVoltage);

    var a = "Voltage : " + currentVoltage + "V";
    PIEaddDisplayCommand(a, test);

    var b = "R1 : " + currentr1 + "";
    PIEaddDisplayCommand(b, test);

    var c = "R2 : " + currentr2 + "";
    PIEaddDisplayCommand(c, test);

    var d = "R3 : " + currentr3 + "";
    PIEaddDisplayCommand(d, test);

    var e = "(Learning)Req : " + currentreq + "";
    PIEaddDisplayCommand(e, test);

    //Observation TABLE
    PIEcreateTable("Observations", 5, 8, true);
    var header=["No","V(V)","I(A)","R1 ","R2 ","R3 ","R ","I'(A)"];
    PIEupdateTableRow(0, header);

    for(var i=1;i<=4;i++){
      for(var j=0;j<8;j++){
        if(j==2||j==7){
          PIEsetCellInput(i,j,8,"");
        }else{
          PIEsetCellInput(i,j,1,"");
        }
      }
    }

    PIEcreateTable2("Learning Table", 5, 7, true);
    var header=["No","I(A)","R1","R2","Req ","X ","Tries "];
    PIEupdateTableRow(0, header);

    for(var i=1;i<=4;i++){
      for(var j=0;j<7;j++){
        if(j==1){
          PIEsetCellInput(i,j,8,"");
        }
        else if(j==6){
          PIEsetCellInput(i,j,10,"");
        }
        else{
          PIEsetCellInput(i,j,1,"");
        }
      }
    }

    PIEtableSelect("Observations");
    document.getElementById("ltab").style.visibility="hidden";


    WA();
    LM();

    loadExpMode();
  }


  function WA(){
    var geometry = new THREE.PlaneGeometry( 80, 60, 32 );
    var material = new THREE.MeshBasicMaterial( {color: 0x110000, side: THREE.DoubleSide} );
    plane = new THREE.Mesh( geometry, material );
    PIEaddElement(plane);
    plane.visible=false;
    plane.position.set(0,0,1);
    PIEinputGUI.visible=false;
    PIEhideControlElement();
  }

  function LM(){
    var geometry = new THREE.PlaneGeometry( 80, 60, 32 );
    var material = new THREE.MeshBasicMaterial( {color: "#001110", side: THREE.DoubleSide} );
    plane2 = new THREE.Mesh( geometry, material );
    PIEaddElement(plane2);
    plane2.visible=false;
    plane2.position.set(0,0,2.5);
    PIEinputGUI.visible=false;


  }


  //SLIDER HANDLING FUNCTIONS
  var currentVoltage=5;
  function handleVoltage(volt){
    if(WAModeCheck==1){

    }
    else if(EModeCheck==0){
      alert("This slider is for Experiment Mode. **You have been switched to Experiment Mode**");
      loadExpMode();
    }
    PIEchangeDisplayCommand("Voltage : " + currentVoltage + "V", "Voltage : " + volt + "V", test);
    currentVoltage = volt;
  }

  var currentr1=1,currentr2=1,currentr3=1,currentreq=1;;
  function handleR1(r1){
    if(EModeCheck==0&&WAModeCheck!=1){
      alert("This slider is for Experiment Mode. **You have been switched to Experiment Mode**");
      loadExpMode();
    }
    PIEchangeDisplayCommand("R1 : " + currentr1 + "", "R1 : " + r1 + "", test);
    currentr1 = r1;
  }

  function handleR2(r2){
    if(EModeCheck==0&&WAModeCheck!=1){
      alert("This slider is for Experiment Mode. **You have been switched to Experiment Mode**");
      loadExpMode();
    }
    PIEchangeDisplayCommand("R2 : " + currentr2 + "", "R2 : " + r2 + "", test);
    currentr2 = r2;
  }

  function handleR3(r3){
    if(EModeCheck==0&&WAModeCheck!=1){
      alert("This slider is for Experiment Mode. **You have been switched to Experiment Mode**");
      loadExpMode();
    }
    PIEchangeDisplayCommand("R3 : " + currentr3 + "", "R3 : " + r3 + "", test);
    currentr3 = r3;
  }

  function handleReq(req){
    if(LModeCheck==0){
      alert("This slider is for Learning Mode. **You have been switched to Learning Mode**");
      loadLearningMode();
    }
    PIEchangeDisplayCommand("(Learning)Req : " + currentreq + "", "(Learning)Req : " + req + "", test);
    currentreq=req;
  }

  var currentLearningVoltage=10;
  function handleLearningVoltage(newval) {
    if(LModeCheck==0){
      alert("This slider is for Learning Mode. **You have been switched to Learning Mode**");
      loadLearningMode();
    }
    currentLearningVoltage=newval;
  }

  function test(){/*Empty function**/}




  /*******Text Loading Function*************/
  function loadText(){
    var loader = new THREE.FontLoader();
    loader.load('optimer.json',function(font){
      var geometry = new THREE.TextGeometry( 'SERIES CIRCUIT', {
        font: font,
        size: 0.7,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var Wtext1 = new THREE.Mesh(geometry,material);
      Wtext1.position.set(-11.5,-3,0);
      PIEaddElement(Wtext1);

      var geometry = new THREE.TextGeometry( 'EQUIVALENT CIRCUIT', {
        font: font,
        size: 0.7,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var Wtext2 = new THREE.Mesh(geometry,material);
      Wtext2.position.set(3.5,-3,0);
      PIEaddElement(Wtext2);

      var geometry = new THREE.TextGeometry( 'R1', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var rtext1 = new THREE.Mesh(geometry,material);
      rtext1.position.set(-11.7,-0.9,0);
      PIEaddElement(rtext1);

      var geometry = new THREE.TextGeometry( 'R2', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var rtext2 = new THREE.Mesh(geometry,material);
      rtext2.position.set(-7.7,-0.9,0);
      PIEaddElement(rtext2);

      var geometry = new THREE.TextGeometry( 'R3', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var rtext3 = new THREE.Mesh(geometry,material);
      rtext3.position.set(-3.7,-0.9,0);
      PIEaddElement(rtext3);

      var geometry = new THREE.TextGeometry( 'R = R1 + R2 + R3', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var rtext4 = new THREE.Mesh(geometry,material);
      rtext4.position.set(6.5,-0.9,0);
      PIEaddElement(rtext4);


      var geometry = new THREE.TextGeometry( 'VOLTS', {
        font: font,
        size: 0.25,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      var vtext1 = new THREE.Mesh(geometry,material);
      vtext1.position.set(-12,1.5,0.05);
      PIEaddElement(vtext1);

      var vtext2 = new THREE.Mesh(geometry,material);
      vtext2.position.set(-8,1.5,0.05);
      PIEaddElement(vtext2);

      var vtext3 = new THREE.Mesh(geometry,material);
      vtext3.position.set(-4,1.5,0.05);
      PIEaddElement(vtext3);

      var vtext5 = new THREE.Mesh(geometry,material);
      vtext5.position.set(-3.3,-7.45,0.05);
      PIEaddElement(vtext5);

      var vtext4 = new THREE.Mesh(geometry,material);
      vtext4.position.set(7.9,1.5,0.05);
      PIEaddElement(vtext4);

      var vtext6 = new THREE.Mesh(geometry,material);
      vtext6.position.set(12.7,-7.45,0.05);
      PIEaddElement(vtext6);

      var geometry = new THREE.TextGeometry( 'AMP', {
        font: font,
        size: 0.30,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:0x010101});
      var amptext1 = new THREE.Mesh(geometry,material);
      amptext1.position.set(-9.45,-5.7,0.01);
      PIEaddElement(amptext1);

      var geometry = new THREE.TextGeometry( 'AMP', {
        font: font,
        size: 0.30,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:0x010101});
      var amptext2 = new THREE.Mesh(geometry,material);
      amptext2.position.set(6.6,-5.7,0);
      amptext2.castShadow=false;
      PIEaddElement(amptext2);

      var geometry = new THREE.TextGeometry( 'V', {
        font: font,
        size: 0.40,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:"white"});
      var v1 = new THREE.Mesh(geometry,material);
      v1.position.set(-2.6,-4.5,0);
      v1.castShadow=false;
      PIEaddElement(v1);

      var v2 = new THREE.Mesh(geometry,material);
      v2.position.set(13.4,-4.5,0);
      v2.castShadow=false;
      PIEaddElement(v2);

      var geometry = new THREE.TextGeometry( 'BULB', {
        font: font,
        size: 0.40,
        height: 0.05,
      });
      var material = new THREE.MeshLambertMaterial({color:"white"});
      var b1 = new THREE.Mesh(geometry,material);
      b1.position.set(-12.7,-7.5,0);
      b1.castShadow=false;
      PIEaddElement(b1);

      var b2 = new THREE.Mesh(geometry,material);
      b2.position.set(3.3,-7.5,0);
      b2.castShadow=false;
      PIEaddElement(b2);

      /*TextGroup = new THREE.Group();
      TextGroup.add(Wtext1);
      TextGroup.add(Wtext2);
      TextGroup.add(rtext1);
      TextGroup.add(rtext2);
      TextGroup.add(rtext3);
      TextGroup.add(rtext4);
      TextGroup.add(vtext1);
      TextGroup.add(vtext2);
      TextGroup.add(vtext3);
      TextGroup.add(vtext4);
      TextGroup.add(vtext5);
      TextGroup.add(vtext6);
      TextGroup.add(amptext1);
      TextGroup.add(amptext2);
      PIEaddElement(TextGroup);*/

      /*Wtext1.visible=false;
      Wtext2.visible=false;
      rtext1.visible=false;
      rtext2.visible=false;
      rtext3.visible=false;
      rtext4.visible=false;
      vtext1.visible=false;
      vtext2.visible=false;
      vtext3.visible=false;
      vtext4.visible=false;
      vtext5.visible=false;
      vtext6.visible=false;
      amptext1.visible=false;
      amptext2.visible=false;*/

      PIErender();
    });

  }


  var attempts=1,sno=1;
  function verifyAnswer(){
    if(LMX==-1){
      alert("Click START first to begin!");
      return;
    }
    var retVal = prompt("Enter calculated X (without symbols) : ", "");
    if(retVal==LMX){
      alert("Correct Answer! X was indeed "+LMX+" ohms. Updating table!");
      LMtrials=0;
      LMR1Value.visible=false;
      LMR2Value.visible=false;
      PIEstopAnimation();

      //TABLE UPDATE Code
      PIEtableSelect("Learning Table");
      PIEupdateTableCell(sno, 0, ""+sno);
      PIEupdateTableCell(sno, 1, ""+(10/(LMR1+LMR2+LMX)).toFixed(3));
      PIEupdateTableCell(sno, 2, ""+LMR1);
      PIEupdateTableCell(sno, 3, ""+LMR2);
      PIEupdateTableCell(sno, 4, ""+(LMR1+LMR2+LMX));
      PIEupdateTableCell(sno, 5, ""+LMX);
      PIEupdateTableCell(sno, 6, ""+attempts);


      LMX=-1;
      sno++;
      attempts=1;
    }
    else{
      alert("Wrong Answer! Try Again.");
      attempts++;
    }
  }

  /*****TEXT LOADING FOR LEARNING MODE********/
  function loadLMText(){
    var loader = new THREE.FontLoader();
    loader.load('optimer.json',function(font){
      var geometry = new THREE.TextGeometry( 'FIND VALUE OF X. CLICK HERE TO VERIFY ANSWER. CLICK START FOR HINTS', {
        font: font,
        size: 0.33,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMtitle = new THREE.Mesh(geometry,material);
      LMtitle.position.set(-8.5,6,3);
      PIEaddElement(LMtitle);
      //PIEsetClick(LMtitle,verifyAnswer);



      var geometry = new THREE.TextGeometry( 'SERIES CIRCUIT', {
        font: font,
        size: 0.7,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMWtext1 = new THREE.Mesh(geometry,material);
      LMWtext1.position.set(-11.5,-3,3);
      PIEaddElement(LMWtext1);

      var geometry = new THREE.TextGeometry( 'EQUIVALENT CIRCUIT', {
        font: font,
        size: 0.7,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMWtext2 = new THREE.Mesh(geometry,material);
      LMWtext2.position.set(3.5,-3,3);
      PIEaddElement(LMWtext2);

      var geometry = new THREE.TextGeometry( 'r1', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMrtext1 = new THREE.Mesh(geometry,material);
      LMrtext1.position.set(-11.7,-0.9,3);
      PIEaddElement(LMrtext1);

      var geometry = new THREE.TextGeometry( 'r2', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMrtext2 = new THREE.Mesh(geometry,material);
      LMrtext2.position.set(-7.7,-0.9,3);
      PIEaddElement(LMrtext2);

      var geometry = new THREE.TextGeometry( 'X (Unknown)', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMrtext3 = new THREE.Mesh(geometry,material);
      LMrtext3.position.set(-5,-0.9,3);
      PIEaddElement(LMrtext3);

      var geometry = new THREE.TextGeometry( 'Req', {
        font: font,
        size: 0.35,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMrtext4 = new THREE.Mesh(geometry,material);
      LMrtext4.position.set(8,-0.9,3);
      PIEaddElement(LMrtext4);


      var geometry = new THREE.TextGeometry( 'VOLTS', {
        font: font,
        size: 0.25,
        height: 0.1,
      });
      var material = new THREE.MeshPhongMaterial({color:0xffffff});
      LMvtext1 = new THREE.Mesh(geometry,material);
      LMvtext1.position.set(-12,1.5,3.05);
      PIEaddElement(LMvtext1);

      LMvtext2 = new THREE.Mesh(geometry,material);
      LMvtext2.position.set(-8,1.5,3.05);
      PIEaddElement(LMvtext2);

      LMvtext3 = new THREE.Mesh(geometry,material);
      LMvtext3.position.set(-4,1.5,3.05);
      PIEaddElement(LMvtext3);

      LMvtext5 = new THREE.Mesh(geometry,material);
      LMvtext5.position.set(-3.3,-7.45,3.05);
      PIEaddElement(LMvtext5);

      LMvtext4 = new THREE.Mesh(geometry,material);
      LMvtext4.position.set(7.9,1.5,3.05);
      PIEaddElement(LMvtext4);

      LMvtext6 = new THREE.Mesh(geometry,material);
      LMvtext6.position.set(12.7,-7.45,3.05);
      PIEaddElement(LMvtext6);

      var geometry = new THREE.TextGeometry( 'AMP', {
        font: font,
        size: 0.30,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:0x010101});
      LMamptext1 = new THREE.Mesh(geometry,material);
      LMamptext1.position.set(-9.45,-5.7,3.01);
      PIEaddElement(LMamptext1);

      var geometry = new THREE.TextGeometry( 'AMP', {
        font: font,
        size: 0.30,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:0x010101});
      LMamptext2 = new THREE.Mesh(geometry,material);
      LMamptext2.position.set(6.6,-5.7,3);
      LMamptext2.castShadow=false;
      PIEaddElement(LMamptext2);

      var geometry = new THREE.TextGeometry( "V", {
        font: font,
        size: 0.40,
        height: 0.01,
      });
      var material = new THREE.MeshLambertMaterial({color:"white"});
      LMv1 = new THREE.Mesh(geometry,material);
      LMv1.position.set(-2.9,-4.5,3);
      LMv1.castShadow=false;
      PIEaddElement(LMv1);

      LMv2 = new THREE.Mesh(geometry,material);
      LMv2.position.set(13.4,-4.5,3);
      LMv2.castShadow=false;
      PIEaddElement(LMv2);

      var geometry = new THREE.TextGeometry( 'BULB', {
        font: font,
        size: 0.40,
        height: 0.05,
      });
      var material = new THREE.MeshLambertMaterial({color:"white"});
      LMb1 = new THREE.Mesh(geometry,material);
      LMb1.position.set(-12.7,-7.5,3);
      LMb1.castShadow=false;
      PIEaddElement(LMb1);

      LMb2 = new THREE.Mesh(geometry,material);
      LMb2.position.set(3.3,-7.5,3);
      LMb2.castShadow=false;
      PIEaddElement(LMb2);



      LMWtext1.visible=true;
      LMWtext2.visible=true;
      LMrtext1.visible=true;
      LMrtext2.visible=true;
      LMrtext3.visible=true;
      LMrtext4.visible=true;
      LMvtext1.visible=true;
      LMvtext2.visible=true;
      LMvtext3.visible=true;
      LMvtext4.visible=true;
      LMvtext5.visible=true;
      LMvtext6.visible=true;
      LMamptext1.visible=true;
      LMamptext2.visible=true;
      LMb1.visible=true;
      LMb2.visible=true;

      PIErender();
    });

  }


  /********CHECKBOX MANIPULATING FUNCTIONS**************/
  function loadExpMode(){
    if(EModeCheck==0){
      PIEchangeInputCheckbox("Experiment",true);
      PIEchangeInputCheckbox("Water Analogy",false);
      PIEchangeInputCheckbox("Learning Mode",false);


      //HIDE ALL WATER ANALOGY & LEARNING MODE ELEMENTS HERE
      if(window.innerWidth<=480){
       PIEsetAreaOfInterest(-40,20,40,-20);
      }
      else{
        PIEsetAreaOfInterest(-25,12,25,-12);
      }

      if(WAModeCheck==1){
        plane.visible=false;
        watitle.visible=false;
        watitle2.visible=false;
        PIErender();
      }
      f1.open();
      f2.close();
      document.getElementById("obstab").style.visibility="visible";
      PIEtableSelect("Observations");
      document.getElementById("ltab").style.visibility="hidden";

      //PIErender();

      if(LModeCheck==1){
        //hide learning mode elements here.
        plane2.visible=false;


        //hiding circuit
        LMCircuitLeft.visible=false;
        LMCircuitRight.visible=false;
        voltwire1.visible=false;
        voltwire2.visible=false;
        voltwire3.visible=false;
        voltsq.visible=false;
        voltsq2.visible=false;
        voltsq3.visible=false;
        volt3wire1.visible=false;
        volt3wire2.visible=false;
        volt3wire3.visible=false;
        volt3sq.visible=false;
        volt3sq2.visible=false;
        volt3sq3.visible=false;
        res1.visible=false;
        res3.visible=false;

        LMSwitch1.visible=false;
        LMSwitch2.visible=false;
        LMbulb1.visible=false;
        LMbulb2.visible=false;

        //hiding text



        LMWtext1.visible=false;
        LMWtext2.visible=false;
        LMrtext1.visible=false;
        LMrtext2.visible=false;
        LMrtext3.visible=false;
        LMrtext4.visible=false;
        LMvtext1.visible=false;
        LMvtext2.visible=false;
        LMvtext3.visible=false;
        LMvtext4.visible=false;
        LMvtext5.visible=false;
        LMvtext6.visible=false;
        LMamptext1.visible=false;
        LMamptext2.visible=false;
        LMb1.visible=false;
        LMb2.visible=false;
        LMv1.visible=false;
        LMv2.visible=false;

        LMtitle.visible=false;
        if(yellowVal==1){
          LMR1Value.visible=false;
          LMR2Value.visible=false;
          LMEQValue.visible=false;
        }

        backBox.visible=false;
      }

      WAModeCheck=0;
      EModeCheck=1;
      LModeCheck=0;

      PIErender();
    }
    else{
      PIEchangeInputCheckbox("Experiment",true);
      EModeCheck=1;
    }
    PIErender();
  }

  function loadWaterAnalogy(){
    if(WAModeCheck==0){
      PIEchangeInputCheckbox("Experiment",false);
      PIEchangeInputCheckbox("Water Analogy",true);
      PIEchangeInputCheckbox("Learning Mode",false);


      //Load all water analogy elements here
      f1.open();
      f2.close();
      plane.visible=true;
      document.getElementById("obstab").style.visibility="hidden";
      //PIEtableSelect("Learning Table");
      document.getElementById("ltab").style.visibility="hidden";
      watitle.visible=true;
      watitle2.visible=true;
      PIErender();


      if(LModeCheck==1){
        //hide learning mode element here also.
        plane2.visible=false;

        if(window.innerWidth<=480){
         PIEsetAreaOfInterest(-40,20,40,-20);
        }
        else{
          PIEsetAreaOfInterest(-25,12,25,-12);
        }

        //hiding circuit
        LMCircuitLeft.visible=false;
        LMCircuitRight.visible=false;
        voltwire1.visible=false;
        voltwire2.visible=false;
        voltwire3.visible=false;
        voltsq.visible=false;
        voltsq2.visible=false;
        voltsq3.visible=false;
        volt3wire1.visible=false;
        volt3wire2.visible=false;
        volt3wire3.visible=false;
        volt3sq.visible=false;
        volt3sq2.visible=false;
        volt3sq3.visible=false;
        res1.visible=false;
        res3.visible=false;

        LMSwitch1.visible=false;
        LMSwitch2.visible=false;
        LMbulb1.visible=false;
        LMbulb2.visible=false;

        //hide text ELEMENTS


        LMWtext1.visible=false;
        LMWtext2.visible=false;
        LMrtext1.visible=false;
        LMrtext2.visible=false;
        LMrtext3.visible=false;
        LMrtext4.visible=false;
        LMvtext1.visible=false;
        LMvtext2.visible=false;
        LMvtext3.visible=false;
        LMvtext4.visible=false;
        LMvtext5.visible=false;
        LMvtext6.visible=false;
        LMamptext1.visible=false;
        LMamptext2.visible=false;
        LMb1.visible=false;
        LMb2.visible=false;
        LMv1.visible=false;
        LMv2.visible=false;
        LMtitle.visible=false;
        backBox.visible=false;
        if(yellowVal==1){
          LMR1Value.visible=false;
          LMR2Value.visible=false;
          LMEQValue.visible=false;
        }

        PIErender();
      }


      WAModeCheck=1;
      EModeCheck=0;
      LModeCheck=0;
    }
    else{
      PIEchangeInputCheckbox("Water Analogy",true);
      WAModeCheck=1;
    }
    PIErender();
  }

  function loadLearningMode(){
    if(LModeCheck==0){
      PIEchangeInputCheckbox("Experiment",false);
      PIEchangeInputCheckbox("Water Analogy",false);
      PIEchangeInputCheckbox("Learning Mode",true);

      f1.close();
      f2.open();


      PIEtableSelect("Learning Table");
      document.getElementById("ltab").style.visibility="visible";

      if(WAModeCheck==1){
        watitle.visible=false;
        watitle2.visible=false;
        plane.visible=false;
      }

      WAModeCheck=0;
      EModeCheck=0;
      LModeCheck=1;



      //Load learning mode elements here.
      plane2.visible=true;
      backBox.visible=true;
      document.getElementById("obstab").style.visibility="hidden";
      //PIEsetAreaOfInterest(-30,12,30,-12);
      if(window.innerWidth<=480){
       PIEsetAreaOfInterest(-40,20,40,-20);
      }
      else{
        PIEsetAreaOfInterest(-25,12,25,-12);
      }
      //Circuit ELEMENTS

      LMCircuitLeft.visible=true;
      LMCircuitRight.visible=true;
      voltwire1.visible=true;
      voltwire2.visible=true;
      voltwire3.visible=true;
      voltsq.visible=true;
      voltsq2.visible=true;
      voltsq3.visible=true;
      volt3wire1.visible=true;
      volt3wire2.visible=true;
      volt3wire3.visible=true;
      volt3sq.visible=true;
      volt3sq2.visible=true;
      volt3sq3.visible=true;
      res1.visible=true;
      res3.visible=true;

      LMSwitch1.visible=true;
      LMSwitch2.visible=true;
      LMbulb1.visible=true;
      LMbulb2.visible=true;

      //Text ELEMENTS
      loadLMText();


      PIErender();

      //Compulsory text Hiding
      if(WAModeCheck==1){
      //  watitle.visible=false;
        //watitle2.visible=false;
      }

      PIErender();
    }
    else{
      PIEchangeInputCheckbox("Learning Mode",true);
      LModeCheck=1;
    }
    PIErender();
  }




  function loadCircuit(z,f){
    //create global variables for wires
    var wirePart1 = new THREE.Mesh(new THREE.BoxGeometry(1.5,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart1);
    wirePart1.position.set(-2,-5,z);
    wirePart1.castShadow=false;

    var wirePart2 = new THREE.Mesh(new THREE.BoxGeometry(2.4,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart2);
    wirePart2.position.set(-4.6,-5,z);
    wirePart2.castShadow=false;

    var wirePart3 = new THREE.Mesh(new THREE.BoxGeometry(1.5,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    //PIEaddElement(wirePart3);
    wirePart3.position.set(-7.1,-5,z);
    wirePart3.castShadow=false;

    var amm = new THREE.Mesh(new THREE.CircleGeometry(01,32),new THREE.MeshLambertMaterial({color:"white"}));
    PIEaddElement(amm);
    amm.position.set(-9,-5,z);

    var wirePart4 = new THREE.Mesh(new THREE.BoxGeometry(7,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart4);
    wirePart4.position.set(-10.5,-5,z);
    wirePart4.castShadow=false;

    //vertical wires
    var wirePart5 = new THREE.Mesh(new THREE.BoxGeometry(0.1,5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart5);
    wirePart5.position.set(-14,-2.55,z);
    wirePart5.castShadow=false;

    var wirePart6 = new THREE.Mesh(new THREE.BoxGeometry(0.1,5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart6);
    wirePart6.position.set(-1.2,-2.55,z);
    wirePart6.castShadow=false;

    res1 = loadResistor();
    res1.position.set(-11.5,0,z);

    var res2 = loadResistor();
    res2.position.set(-7.5,0,z);

    res3 = loadResistor();
    res3.position.set(-3.5,0,z);

    var wirePart7 = new THREE.Mesh(new THREE.BoxGeometry(12.9,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(wirePart7);
    wirePart7.position.set(-7.6,0,z);
    wirePart7.castShadow=false;

    var cell1 = loadCell(-3,-5,z);
    var cell2 = loadCell(-3.4,-5,z);


    var bulbCyl = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,0.7,32),new THREE.MeshLambertMaterial({color:"gray"}));
    PIEaddElement(bulbCyl);
    bulbCyl.position.set(-12,-5,z)

    //VOLTMETERS

    /********1st voltmeter**********/
    voltwire1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(voltwire1);
    voltwire1.position.set(-13,1,z);
    voltwire1.castShadow=false;

    voltwire2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(voltwire2);
    voltwire2.position.set(-10,1,z);
    voltwire2.castShadow=false;

    voltwire3 = new THREE.Mesh(new THREE.BoxGeometry(3.1,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(voltwire3);
    voltwire3.position.set(-11.5,2,z);
    voltwire3.castShadow=false;

    //voltmeter box
    voltsq = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(voltsq);
    voltsq.position.set(-11.5,2,z);

    voltsq2 = new THREE.Mesh(new THREE.BoxGeometry(1.75,1.25,0),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(voltsq2);
    voltsq2.position.set(-11.5,2,z);

    voltsq3 = new THREE.Mesh(new THREE.BoxGeometry(1.75,0.5,0),new THREE.MeshBasicMaterial({color:0x101010}));
    PIEaddElement(voltsq3);
    voltsq3.position.set(-11.5,1.62,z);



    /********2nd voltmeter**********/
    var volt2wire1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt2wire1);
    volt2wire1.position.set(-9,1,z);
    volt2wire1.castShadow=false;

    var volt2wire2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt2wire2);
    volt2wire2.position.set(-6,1,z);
    volt2wire2.castShadow=false;

    var volt2wire3 = new THREE.Mesh(new THREE.BoxGeometry(3.1,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt2wire3);
    volt2wire3.position.set(-7.5,2,z);
    volt2wire3.castShadow=false;

    //voltmeter box
    var volt2sq = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt2sq);
    volt2sq.position.set(-7.5,2,z);

    var volt2sq2 = new THREE.Mesh(new THREE.BoxGeometry(1.75,1.25,0),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(volt2sq2);
    volt2sq2.position.set(-7.5,2,z);

    var volt2sq3 = new THREE.Mesh(new THREE.BoxGeometry(1.75,0.5,0),new THREE.MeshBasicMaterial({color:0x101010}));
    PIEaddElement(volt2sq3);
    volt2sq3.position.set(-7.5,1.62,z);



    /********3rd voltmeter**********/
    volt3wire1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt3wire1);
    volt3wire1.position.set(-5,1,z);
    volt3wire1.castShadow=false;

    volt3wire2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt3wire2);
    volt3wire2.position.set(-2,1,z);
    volt3wire2.castShadow=false;

    volt3wire3 = new THREE.Mesh(new THREE.BoxGeometry(3.1,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt3wire3);
    volt3wire3.position.set(-3.5,2,z);
    volt3wire3.castShadow=false;

    //voltmeter box
    volt3sq = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(volt3sq);
    volt3sq.position.set(-3.5,2,z);

    volt3sq2 = new THREE.Mesh(new THREE.BoxGeometry(1.75,1.25,0),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(volt3sq2);
    volt3sq2.position.set(-3.5,2,z);

    volt3sq3 = new THREE.Mesh(new THREE.BoxGeometry(1.75,0.5,0),new THREE.MeshBasicMaterial({color:0x101010}));
    PIEaddElement(volt3sq3);
    volt3sq3.position.set(-3.5,1.62,z);



    /***********BATTERY VOLTMETER****************/
    var bvoltwire1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(bvoltwire1);
    bvoltwire1.position.set(-4.2,-6,z);
    bvoltwire1.castShadow=false;

    var bvoltwire2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(bvoltwire2);
    bvoltwire2.position.set(-1.2,-6,z);
    bvoltwire2.castShadow=false;

    var bvoltwire3 = new THREE.Mesh(new THREE.BoxGeometry(3.1,0.1,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(bvoltwire3);
    bvoltwire3.position.set(-2.7,-7,z);
    bvoltwire3.castShadow=false;

    //voltmeter box
    var bvoltsq = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,0),new THREE.MeshBasicMaterial({color:"white"}));
    PIEaddElement(bvoltsq);
    bvoltsq.position.set(-2.7,-7,z);

    var bvoltsq2 = new THREE.Mesh(new THREE.BoxGeometry(1.75,1.25,0),new THREE.MeshBasicMaterial({color:"black"}));
    PIEaddElement(bvoltsq2);
    bvoltsq2.position.set(-2.7,-7,z);

    var bvoltsq3 = new THREE.Mesh(new THREE.BoxGeometry(1.75,0.5,0),new THREE.MeshBasicMaterial({color:0x101010}));
    PIEaddElement(bvoltsq3);
    bvoltsq3.position.set(-2.7,-7.38,z);



    var CIRCUIT1 = new THREE.Group();
    CIRCUIT1.add(wirePart1);
    CIRCUIT1.add(wirePart2);
    CIRCUIT1.add(wirePart4);
    CIRCUIT1.add(wirePart5);
    CIRCUIT1.add(wirePart6);
    CIRCUIT1.add(wirePart7);
    CIRCUIT1.add(cell1);
    CIRCUIT1.add(cell2);
    CIRCUIT1.add(res2);
    CIRCUIT1.add(bulbCyl);
    CIRCUIT1.add(volt2wire1);
    CIRCUIT1.add(volt2wire2);
    CIRCUIT1.add(volt2wire3);
    CIRCUIT1.add(volt2sq);
    CIRCUIT1.add(amm)
    CIRCUIT1.add(volt2sq2);
    CIRCUIT1.add(volt2sq3);

    CIRCUIT1.add(bvoltwire1);
    CIRCUIT1.add(bvoltwire2);
    CIRCUIT1.add(bvoltwire3);
    CIRCUIT1.add(bvoltsq);
    CIRCUIT1.add(bvoltsq2);
    CIRCUIT1.add(bvoltsq3);

    PIEaddElement(CIRCUIT1);
    PIErender();

    if(f==1){
      voltwire1.visible=false;
      voltwire2.visible=false;
      voltwire3.visible=false;
      voltsq.visible=false;
      voltsq2.visible=false;
      voltsq3.visible=false;
      volt3wire1.visible=false;
      volt3wire2.visible=false;
      volt3wire3.visible=false;
      volt3sq.visible=false;
      volt3sq2.visible=false;
      volt3sq3.visible=false;
      res1.visible=false;
      res3.visible=false;
    }

    return CIRCUIT1;
  }


  function loadCell(x,y,z){
    var long_bar = new THREE.Mesh(new THREE.BoxGeometry(0.08,1,0),new THREE.MeshBasicMaterial({color:"white"}));
    long_bar.position.set(0,0,0);
    long_bar.castShadow=false;

    var short_bar = new THREE.Mesh(new THREE.BoxGeometry(0.08,0.6,0),new THREE.MeshBasicMaterial({color:"white"}));
    short_bar.position.set(0.2,0,0);
    short_bar.castShadow=false;

    var cellGroup = new THREE.Group();
    cellGroup.add(long_bar);
    cellGroup.add(short_bar);
    PIEaddElement(cellGroup);
    cellGroup.position.set(x,y,z);
    return cellGroup;
  }


  function loadResistor(){
    var cyl = new THREE.Mesh(new THREE.CylinderGeometry(0.35,0.35,2,32),new THREE.MeshLambertMaterial({color:"gray"}));
    PIEaddElement(cyl);
    cyl.rotation.z+=Math.PI/2;
    return cyl;
  }



  /****************ANIMATION FUNCTION*****************/
  /***Implements the physics behind the experiment****/

  function updateExperimentElements(t,dt){
      if(WAModeCheck==1){

        leftpipeWater.position.y+=(dt/400)*(currentVoltage/10);
        if(leftpipeWater.position.y>=leftpipe.position.y){
          leftpipeWater.position.y=leftpipe.position.y;

          toppipeWater.position.x+=(dt/400)*(currentVoltage/10);
          if(toppipeWater.position.x>=toppipe.position.x){
            toppipeWater.position.x=toppipe.position.x;

            tube1Water.visible=true;
            tube1Water.position.y-=(dt/400)*currentr1;
            if(tube1Water.position.y<=tube1.position.y){
              tube1Water.position.y=tube1.position.y;


              if(tube2Water.scale.y<=30){
                tube2Water.visible=true;
                tube2Water.scale.y+=(dt/50)*currentr2;
                tube2Water.position.y-=(dt/1000)*currentr2;
              }else{
                if(tube3Water.scale.y<=30){
                  tube3Water.visible=true;
                  tube3Water.scale.y+=(dt/50)*currentr3;
                  tube3Water.position.y-=(dt/1000)*currentr3;
                }
                else{
                  bottompipeWater.visible=true;
                  bottompipeWater.position.x-=(dt/400)*(currentVoltage/10);
                  if(bottompipeWater.position.x<=bottompipe.position.x){
                    bottompipeWater.position.x=bottompipe.position.x;

                    alert("Water Movement Cycle Complete!");
                    PIEstopAnimation();
                  }
                }
              }

            }
          }
        }
      }

  }

  //CHANGES MADE WHEN START BUTTON IS CLICKED
  function AnimationStart(){
    animationStatus=1;
    if(EModeCheck==1){
      bulb1.material.color.setStyle("#FFFF00");
      bulb2.material.color.setStyle("#FFFF00");
      Switch1.rotation.z=0;
      Switch1.position.set(-6.4,-5,0);
      Switch2.rotation.z=0;
      Switch2.position.set(9.6,-5,0);

      //Some physics calculations
      circuitCurrent = (currentVoltage)/(currentr1+currentr2+currentr3);
      voltmeter1 = (circuitCurrent*currentr1);
      voltmeter2 = (circuitCurrent*currentr2);
      voltmeter3 = (circuitCurrent*currentr3);
      batteryVoltmeter = currentVoltage;

      circuitCurrent=circuitCurrent.toFixed(3);
      voltmeter1=voltmeter1.toFixed(3);
      voltmeter2=voltmeter2.toFixed(3);
      voltmeter3=voltmeter3.toFixed(3);

      //TEXT PRINTING
      var loader = new THREE.FontLoader();
      loader.load('digital.json',function(font){
        var geometry = new THREE.TextGeometry( circuitCurrent+"", {
          font: font,
          size: 0.55,
          height: 0.1,
        });
        var material = new THREE.MeshBasicMaterial({color:0x010101});
        currentText1 = new THREE.Mesh(geometry,material);
        currentText1.position.set(-9.7,-5,0);
        currentText1.castShadow=false;
        PIEaddElement(currentText1);

        currentText2 = new THREE.Mesh(geometry,material);
        currentText2.position.set(6.2,-5,0);
        currentText2.castShadow=false;
        PIEaddElement(currentText2);


        var geometry = new THREE.TextGeometry( voltmeter1+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText1 = new THREE.Mesh(geometry,material);
        voltText1.position.set(-12,2.1,0);
        voltText1.castShadow=false;
        PIEaddElement(voltText1);

        var geometry = new THREE.TextGeometry( voltmeter2+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText2 = new THREE.Mesh(geometry,material);
        voltText2.position.set(-8,2.1,0);
        voltText2.castShadow=false;
        PIEaddElement(voltText2);

        var geometry = new THREE.TextGeometry( voltmeter3+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText3 = new THREE.Mesh(geometry,material);
        voltText3.position.set(-4,2.1,0);
        voltText3.castShadow=false;
        PIEaddElement(voltText3);


        var geometry = new THREE.TextGeometry( currentVoltage.toFixed(3)+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        batteryVoltText1 = new THREE.Mesh(geometry,material);
        batteryVoltText1.position.set(-3.2,-6.9,0);
        batteryVoltText1.castShadow=false;
        PIEaddElement(batteryVoltText1);

        batteryVoltText2 = new THREE.Mesh(geometry,material);
        batteryVoltText2.position.set(12.75,-6.9,0);
        batteryVoltText2.castShadow=false;
        PIEaddElement(batteryVoltText2);

        eqVoltText = new THREE.Mesh(geometry,material);
        eqVoltText.position.set(8,2.1,0);
        eqVoltText.castShadow=false;
        PIEaddElement(eqVoltText);

        PIErender();
      });

      //Updating Observation Table
      if(trials==5){
        alert('Maximum capacity of observation table reached! Please reset to continue.')
      }
      else{
        PIEtableSelect("Observations");
        PIEupdateTableCell(trials, 0, ""+trials);
        PIEupdateTableCell(trials, 1, ""+currentVoltage);
        PIEupdateTableCell(trials, 2, ""+circuitCurrent);
        PIEupdateTableCell(trials, 3, ""+currentr1);
        PIEupdateTableCell(trials, 4, ""+currentr2);
        PIEupdateTableCell(trials, 5, ""+currentr3);
        PIEupdateTableCell(trials, 6, ""+(currentr1+currentr2+currentr3));
        PIEupdateTableCell(trials, 7, ""+circuitCurrent);
        trials++;
      }


      PIErender();
    }


    if(WAModeCheck==1){
      //water analogy start motion
      watitle.visible=false;
      watitle2.visible=false;


      tube1 = new THREE.Mesh(new THREE.CylinderGeometry(currentr1/3,currentr1/3,3,32),new THREE.MeshLambertMaterial({color:"#f0e68c",transparent:true,opacity:0.6}));
      PIEaddElement(tube1);
      tube1.position.set(2,3,2);

      tube2 = new THREE.Mesh(new THREE.CylinderGeometry(currentr2/3,currentr2/3,3,32),new THREE.MeshLambertMaterial({color:"white",transparent:true,opacity:0.6}));
      PIEaddElement(tube2);
      tube2.position.set(2,0,2);

      tube3 = new THREE.Mesh(new THREE.CylinderGeometry(currentr3/3,currentr3/3,3,32),new THREE.MeshLambertMaterial({color:"#f0e68c",transparent:true,opacity:0.6}));
      PIEaddElement(tube3);
      tube3.position.set(2,-3,2);

      toppipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"white",transparent:true,opacity:0.5}));
      PIEaddElement(toppipe);
      toppipe.rotation.z+=Math.PI/2;
      toppipe.position.set(-1.7,4.3,2);

      bottompipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"white",transparent:true,opacity:0.5}));
      PIEaddElement(bottompipe);
      bottompipe.rotation.z+=Math.PI/2;
      bottompipe.position.set(-1.7,-4.3,2);

      leftpipe = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"white",transparent:true,opacity:0.5}));
      PIEaddElement(leftpipe);
      leftpipe.position.set(-5.4,0,2);

      motor = new THREE.Mesh(new THREE.BoxGeometry(4,3,1),new THREE.MeshLambertMaterial({color:0x228B22}));
      PIEaddElement(motor);
      motor.position.set(-5.4,-3,2);

      var loader = new THREE.FontLoader();
      loader.load('optimer.json',function(font){
        var geometry = new THREE.TextGeometry( "MOTOR", {
          font: font,
          size: 0.5,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"white"});
        motortext = new THREE.Mesh(geometry,material);
        motortext.position.set(-6.5,-3,2.7);
        motortext.castShadow=false;
        PIEaddElement(motortext);

        var geometry = new THREE.TextGeometry( "R1 ", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"white"});
        r1text = new THREE.Mesh(geometry,material);
        r1text.position.set(5,3,2.7);
        r1text.castShadow=false;
        PIEaddElement(r1text);

        var geometry = new THREE.TextGeometry( "R2", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"white"});
        r2text = new THREE.Mesh(geometry,material);
        r2text.position.set(5,0,2.7);
        r2text.castShadow=false;
        PIEaddElement(r2text);

        var geometry = new THREE.TextGeometry( "R3", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"white"});
        r3text = new THREE.Mesh(geometry,material);
        r3text.position.set(5,-3,2.7);
        r3text.castShadow=false;
        PIEaddElement(r3text);

        var geometry = new THREE.TextGeometry( "<-- Voltage = Pressure Difference -->", {
          font: font,
          size: 0.35,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"white"});
        vtext = new THREE.Mesh(geometry,material);
        vtext.position.set(-10,-4.5,2.7);
        vtext.castShadow=false;
        vtext.rotation.z+=Math.PI/2;
        PIEaddElement(vtext);
        PIErender();
      });

      //WATER TO ANIMATE
      toppipeWater = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(toppipeWater);
      toppipeWater.rotation.z+=Math.PI/2;
      toppipeWater.position.set(-9.7,4.3,2);

      bottompipeWater = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(bottompipeWater);
      bottompipeWater.rotation.z+=Math.PI/2;
      bottompipeWater.position.set(6.2,-4.3,2);
      bottompipeWater.visible=false;

      leftpipeWater = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,8,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(leftpipeWater);
      leftpipeWater.position.set(-5.4,-8,2);


      tube1Water = new THREE.Mesh(new THREE.CylinderGeometry(currentr1/3,currentr1/3,3,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(tube1Water);
      tube1Water.position.set(2,6.2,2);
      tube1Water.visible=false;

      tube2Water = new THREE.Mesh(new THREE.CylinderGeometry(currentr2/3,currentr2/3,0.1,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(tube2Water);
      tube2Water.position.set(2,1.5,2);
      tube2Water.visible=false;

      tube3Water = new THREE.Mesh(new THREE.CylinderGeometry(currentr3/3,currentr3/3,0.1,32),new THREE.MeshLambertMaterial({color:"#0f5e9c",transparent:true,opacity:0.9}));
      PIEaddElement(tube3Water);
      tube3Water.position.set(2,-1.5,2);
      tube3Water.visible=false;


      //Hiding in progress
      tophide = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,8,32),new THREE.MeshBasicMaterial({color:"#110000"}));
      PIEaddElement(tophide);
      tophide.rotation.z+=Math.PI/2;
      tophide.position.set(-9.7,4.3,2.2);

      bottomhide = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,9,32),new THREE.MeshBasicMaterial({color:"#110000"}));
      PIEaddElement(bottomhide);
      bottomhide.rotation.z+=Math.PI/2;
      bottomhide.position.set(6.5+(currentr3/3),-4.3,2);
      PIEdragElement(bottomhide);

      lefthide = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.4,8,32),new THREE.MeshBasicMaterial({color:"#110000"}));
      PIEaddElement(lefthide);
      lefthide.castShadow=false;
      lefthide.position.set(-5.4,-8,2);

      tophide2 = new THREE.Mesh(new THREE.CylinderGeometry(currentr1/2,currentr1/2,3,32),new THREE.MeshBasicMaterial({color:"#110000"}));
      PIEaddElement(tophide2);
      tophide2.position.set(2,6.1,2.1);

      bottomhide.visible=true;
      lefthide.visible=true;
      tophide.visible=true;
      tophide2.visible=true;
      PIErender();
    }

    if(LModeCheck==1){



      LMbulb1.material.color.setStyle("#FFFF00");
      LMbulb2.material.color.setStyle("#FFFF00");
      LMSwitch1.rotation.z=0;
      LMSwitch1.position.set(-6.4,-5,3);
      LMSwitch2.rotation.z=0;
      LMSwitch2.position.set(9.6,-5,3);


      if(LMtrials==0){
        LMR1 = Math.floor(Math.random() * 5) + 1;
        LMR2 = Math.floor(Math.random() * 5) + 1;
        LMX = Math.floor(Math.random() * 5) + 1;
        LMtrials=1;
        alert("Hint: Start by getting same value of current in both circuits by adjusting equivalent circuit resistance! Once done the next hint will be provided automatically.");
      }

      var loader=new THREE.FontLoader();
      loader.load('optimer.json',function(font){
        var geometry = new THREE.TextGeometry( "= "+LMR1+" Ω", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"yellow"});
        LMR1Value = new THREE.Mesh(geometry,material);
        LMR1Value.position.set(-12.25,-1.5,3.1);
        LMR1Value.castShadow=false;
        PIEaddElement(LMR1Value);

        var geometry = new THREE.TextGeometry( "= "+LMR2+" Ω", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"yellow"});
        LMR2Value = new THREE.Mesh(geometry,material);
        LMR2Value.position.set(-8.25,-1.5,3.1);
        LMR2Value.castShadow=false;
        PIEaddElement(LMR2Value);

        var geometry = new THREE.TextGeometry( "= "+(currentreq)+" Ω", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:"yellow"});
        LMEQValue = new THREE.Mesh(geometry,material);
        LMEQValue.position.set(8,-1.5,3.1);
        LMEQValue.castShadow=false;
        PIEaddElement(LMEQValue);

        yellowVal=1;
      });


      var correctReq = LMR1+LMR2+LMX;

      var leftCircuitCurrent = currentLearningVoltage/(correctReq);
      var rightCircuitCurrent = currentLearningVoltage/currentreq;


      if((leftCircuitCurrent*1000).toFixed(1)==(rightCircuitCurrent*1000).toFixed(1)){
        alert("Hint: Now that the current in both circuits are same, use the formula r1+r2+X=Req to obtain the value of X. Once done click the onscreen button to verfy answer.");
      }

      var loader = new THREE.FontLoader();
      loader.load('digital.json',function(font){
        var geometry = new THREE.TextGeometry( leftCircuitCurrent.toFixed(3)+"", {
          font: font,
          size: 0.55,
          height: 0.1,
        });
        var material = new THREE.MeshBasicMaterial({color:0x010101});
        currentText1 = new THREE.Mesh(geometry,material);
        currentText1.position.set(-9.7,-5,3);
        currentText1.castShadow=false;
        PIEaddElement(currentText1);

        var geometry = new THREE.TextGeometry( rightCircuitCurrent.toFixed(3)+"", {
          font: font,
          size: 0.55,
          height: 0.1,
        });
        var material = new THREE.MeshBasicMaterial({color:0x010101});
        currentText2 = new THREE.Mesh(geometry,material);
        currentText2.position.set(6.2,-5,3);
        currentText2.castShadow=false;
        PIEaddElement(currentText2);


        var geometry = new THREE.TextGeometry( (leftCircuitCurrent*LMR1).toFixed(3)+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText1 = new THREE.Mesh(geometry,material);
        voltText1.position.set(-12,2.1,3);
        voltText1.castShadow=false;
        PIEaddElement(voltText1);

        var geometry = new THREE.TextGeometry( (leftCircuitCurrent*LMR2).toFixed(3)+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText2 = new THREE.Mesh(geometry,material);
        voltText2.position.set(-8,2.1,3);
        voltText2.castShadow=false;
        PIEaddElement(voltText2);

        var geometry = new THREE.TextGeometry( (leftCircuitCurrent*LMX).toFixed(3)+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        voltText3 = new THREE.Mesh(geometry,material);
        voltText3.position.set(-4,2.1,3);
        voltText3.castShadow=false;
        PIEaddElement(voltText3);


        var geometry = new THREE.TextGeometry( currentLearningVoltage.toFixed(3)+"", {
          font: font,
          size: 0.4,
          height: 0.05,
        });
        var material = new THREE.MeshBasicMaterial({color:0xffffff});
        batteryVoltText1 = new THREE.Mesh(geometry,material);
        batteryVoltText1.position.set(-3.2,-6.9,3);
        batteryVoltText1.castShadow=false;
        PIEaddElement(batteryVoltText1);

        batteryVoltText2 = new THREE.Mesh(geometry,material);
        batteryVoltText2.position.set(12.75,-6.9,3);
        batteryVoltText2.castShadow=false;
        PIEaddElement(batteryVoltText2);

        eqVoltText = new THREE.Mesh(geometry,material);
        eqVoltText.position.set(8,2.1,3);
        eqVoltText.castShadow=false;
        PIEaddElement(eqVoltText);

        PIErender();
      });
    }
  }



  //CHANGES MADE WHEN STOP BUTTON IS CLICKED
  function AnimationStop(){
    animationStatus=0;
    if(EModeCheck==1){
      bulb1.material.color.setStyle("#FFFFFF");
      bulb2.material.color.setStyle("#FFFFFF");
      Switch1.rotation.z=Math.PI/4;
      Switch1.position.set(-6.6,-4.6,0);
      Switch2.rotation.z=Math.PI/4;
      Switch2.position.set(9.4,-4.6,0);

      currentText1.visible=false;
      currentText2.visible=false;
      voltText1.visible=false;
      voltText2.visible=false;
      voltText3.visible=false;
      batteryVoltText1.visible=false;
      batteryVoltText2.visible=false;
      eqVoltText.visible=false;
    }

    if(WAModeCheck==1){
      watitle.visible=true;
      watitle2.visible=true;

      vtext.visible=false;
      tube1.visible=false;
      tube2.visible=false;
      tube3.visible=false;
      toppipe.visible=false;
      bottompipe.visible=false;
      leftpipe.visible=false;
      motor.visible=false;
      motortext.visible=false;
      r1text.visible=false;
      r2text.visible=false;
      r3text.visible=false;
      toppipeWater.visible=false;
      bottompipeWater.visible=false;
      leftpipeWater.visible=false;
      tube1Water.visible=false;
      tube2Water.visible=false;
      tube3Water.visible=false;

      bottomhide.visible=false;
      lefthide.visible=false;
      tophide.visible=false;
      tophide2.visible=false;
    }

    if(LModeCheck==1){
      PIEdisplayGUI.domElement.style.display = "inline";
      LMbulb1.material.color.setStyle("#FFFFFF");
      LMbulb2.material.color.setStyle("#FFFFFF");
      LMSwitch1.rotation.z=Math.PI/4;
      LMSwitch1.position.set(-6.6,-4.6,3);
      LMSwitch2.rotation.z=Math.PI/4;
      LMSwitch2.position.set(9.4,-4.6,3);

      currentText1.visible=false;
      currentText2.visible=false;
      voltText1.visible=false;
      voltText2.visible=false;
      voltText3.visible=false;
      batteryVoltText1.visible=false;
      batteryVoltText2.visible=false;
      eqVoltText.visible=false;
      LMEQValue.visible=false;
      LMR1Value.visible=false;
      LMR2Value.visible=false;
    }
    PIErender();
  }


  function resetExperiment(){

    if(WAModeCheck==1){
      /*WAModeCheck=0;
      EModeCheck=1;
      PIEchangeInputCheckbox("Experiment",true);
      PIEchangeInputCheckbox("Water Analogy",false);
      plane.visible=false;
      document.getElementById("obstab").style.visibility="visible";
      watitle.visible=false;
      watitle2.visible=false;*/

      PIErender();
    }

    if(LModeCheck==1){
      /*EModeCheck=1;
      LModeCheck=0;
      PIEchangeInputCheckbox("Experiment",true);
      PIEchangeInputCheckbox("Learning Mode",false);
      f1.open();
      f2.close();

      plane2.visible=false;
      PIEsetAreaOfInterest(-25,12,25,-12);
      document.getElementById("obstab").style.visibility="visible";
      document.getElementById("ltab").style.visibility="hidden";
      //hiding circuit
      LMCircuitLeft.visible=false;
      LMCircuitRight.visible=false;
      voltwire1.visible=false;
      voltwire2.visible=false;
      voltwire3.visible=false;
      voltsq.visible=false;
      voltsq2.visible=false;
      voltsq3.visible=false;
      volt3wire1.visible=false;
      volt3wire2.visible=false;
      volt3wire3.visible=false;
      volt3sq.visible=false;
      volt3sq2.visible=false;
      volt3sq3.visible=false;
      res1.visible=false;
      res3.visible=false;

      LMSwitch1.visible=false;
      LMSwitch2.visible=false;
      LMbulb1.visible=false;
      LMbulb2.visible=false;
      LMWtext1.visible=false;
      LMWtext2.visible=false;
      LMrtext1.visible=false;
      LMrtext2.visible=false;
      LMrtext3.visible=false;
      LMrtext4.visible=false;
      LMvtext1.visible=false;
      LMvtext2.visible=false;
      LMvtext3.visible=false;
      LMvtext4.visible=false;
      LMvtext5.visible=false;
      LMvtext6.visible=false;
      LMamptext1.visible=false;
      LMamptext2.visible=false;
      LMb1.visible=false;
      LMb2.visible=false;
      LMv1.visible=false;
      LMv2.visible=false;
      LMtitle.visible=false;
      backBox.visible=false;
      if(yellowVal==1){
        LMR1Value.visible=false;
        LMR2Value.visible=false;
        LMEQValue.visible=false;
      }*/
      PIErender();
    }

    //AnimationStop();
    PIEtableSelect("Observations");
    for(var i=1;i<=trials;i++){
      PIEupdateTableCell(i, 0, "");
      PIEupdateTableCell(i, 1, "");
      PIEupdateTableCell(i, 2, "");
      PIEupdateTableCell(i, 3, "");
      PIEupdateTableCell(i, 4, "");
      PIEupdateTableCell(i, 5, "");
      PIEupdateTableCell(i, 6, "");
      PIEupdateTableCell(i, 7, "");
    }
    trials=1;

    PIEtableSelect("Learning Table");
    for(var i=1;i<=4;i++){
      PIEupdateTableCell(i, 0, "");
      PIEupdateTableCell(i, 1, "");
      PIEupdateTableCell(i, 2, "");
      PIEupdateTableCell(i, 3, "");
      PIEupdateTableCell(i, 4, "");
      PIEupdateTableCell(i, 5, "");
      PIEupdateTableCell(i, 6, "");
    }
    attempts=1;
    sno=1;

    loadExpMode();

  }
