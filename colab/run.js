///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users.csv";
var coloumn = 5;
var folderDownload = "D:\Downloads\Server\Windows\Installer\Colab\FirefoxPortable\Data\profile\iMacros";
var urlDownload = "https://raw.githubusercontent.com/wildannss/clb/main";
var urlSubDownload = "colab";
var counted = parseInt(window.prompt("Use number only"));
var serviceCap = "http://imacros2.2captcha.com";
//VARIABEL ERROR
var error1 = /RuntimeError: Can not locate element specified by selector "#gb>DIV>DIV>A"/g;
var error9 = /RuntimeError: Can not locate element specified by selector "#view_container/g;
var error6 = /RuntimeError: Can not locate element specified by selector "#edit-account-list"/g;
var error2 = /RuntimeError: element INPUT specified by ID:Email was not found/g;
var error7 = /RuntimeError: element INPUT specified by ID:identifierId was not found/g;
var error4 = /RuntimeError: element INPUT specified by ID:password was not found/g;
var error10 = /RuntimeError: element INPUT specified by NAME:password was not found/g;
//error8 NOT USED
var error8 = /RuntimeError: Can not locate element specified by selector "#passwordNext>DIV>BUTTON"/g;
var error3 = /RuntimeError: Can not locate element specified by selector "#accept"/g;
var error5  = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "A script on this page may be busy, or it may have stopped responding. You can stop the script now, open the script in the debugger, or let the script continue/g;
var error12 = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "This page is asking you to confirm that you want to leave - data you have entered may not be saved."/g;
//error11 NOT USED
var error11 = /RuntimeError: element IMG specified by ID:captcha-img was not found/g;
var error13  = /RuntimeError: Element A is not visible/g;
//error14 NOT USED
var error14 = /NS_ERROR_FILE_NOT_FOUND: Component returned failure code/g;
var error15 = /RuntimeError: Can not locate element specified by selector "#ok"/g;
var reconnect = /Reconnect/g;
//gpu NOT USED
var gpu = /Cannot connect to GPU backend/g;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SET VARIABEL HEAD
function head(){
    iimSet("version",version);
    iimSet("source",source);
    iimSet("coloumn",coloumn);
    iimSet("folderDownload",folderDownload);
    iimSet("urlDownload",urlDownload);
    iimSet("urlSubDownload",urlSubDownload);
    iimSet("serviceCap",serviceCap);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGOUT
function logout(iout){
    //LOGOUT
    head();
    iimSet("loop",iout);
    var out = iimGetErrorText(iimPlay("colab/logout"));
    if(error12.test(out)){
        head();
        iimSet("loop",iout);
        iimPlay("colab/logout_f");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUNNING CODE
function runningCode(icod){
    //RUNNING CODE
    head();
    iimSet("loop",icod);
    iimPlay("colab/run_code");
    //KEEP CONNECTED 10x
    for(r=1; r<=2; r++){
        head();
        iimSet("loop",icod);
        var reconn = iimGetErrorText(iimPlay("colab/keep_code"));
        //JIKA TIDAK ADA WARN GPU
        if(error15.test(reconn)){
            iimPlayCode("WAIT SECONDS=180");
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//UPDATE DATA SOURCE
function dataSource(idat=1){
    head();
    iimSet("loop",idat);
    var dat = iimGetErrorText(iimPlay("colab/data"));
    if(error12.test(dat)){
        head();
        iimSet("loop",idat);
        logout(idat);
        head();
        iimSet("loop",idat);
        iimPlay("colab/data");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//UPDATE SCRIPT
function upScript(iscr){
    head();
    iimSet("loop",iscr);
    var scr = iimGetErrorText(iimPlay("colab/data"));
    if(error12.test(scr)){
        head();
        iimSet("loop",iscr);
        logout(iscr);
        head();
        iimSet("loop",iscr);
        iimPlay("colab/data");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGIC RUNNING//
function go(i){
    //UPDATE SCRIPT
    // upScript(parseInt(counted+i))
    //1.LOGIN TANPA USER FORM BARU
    head();
    iimSet("loop",parseInt(counted+i));
    var run1 = iimGetErrorText(iimPlay("colab/login_new"));

    //2.JIKA LOGIN ADA USER FORM BARU
    if(error7.test(run1)){
        head();
        iimSet("loop",parseInt(counted+i));
        var run2 = iimGetErrorText(iimPlay("colab/login_del_new"));
        //2.a.JIKA LOGIN ADA USER FORM LAMA
        if(error9.test(run2)){
            head();
            iimSet("loop",parseInt(counted+i));
            var run3 = iimGetErrorText(iimPlay("colab/login_del"));
            //2.a.1.JIKA LOGIN TANPA USER FORM LAMA
            if(error6.test(run3)){
                head();
                iimSet("loop",parseInt(counted+i));
                var run4 = iimGetErrorText(iimPlay("colab/login"));                    
                if(error4.test(run4)){
                    ////CAPCTHA////
                    head();
                    iimSet("loop",parseInt(counted+i));
                    iimPlay("colab/captcha");
                    runningCode(parseInt(counted+i));
                    logout(parseInt(counted+i));
                    ////CAPCTHA////
                }
                //2.a.1.1.JIKA SUDAH PERNAH LOGIN
                else if(error3.test(run4)){
                    logout(parseInt(counted+i));
                }
                //2.a.1.2.JIKA TIDAK ADA ERROR
                else{
                    runningCode(parseInt(counted+i));
                    logout(parseInt(counted+i));
                }
            }
            //2.a.2.JIKA SUDAH PERNAH LOGIN
            else if(error3.test(run3)){
                logout(parseInt(counted+i));
            }
            //2.a.3.JIKA TIDAK ADA ERROR
            else{
                runningCode(parseInt(counted+i));
                logout(parseInt(counted+i));
            }
        }
        //2.b.JIKA SUDAH PERNAH LOGIN
        else if(error3.test(run2)){
            logout(parseInt(counted+i));
        }
        //2.c.JIKA TIDAK ADA ERROR
        else{
            runningCode(parseInt(counted+i));
            logout(parseInt(counted+i));
        }
    }

    //3.JIKA BELUM LOGOUT
    else if(error1.test(run1)){
        logout(parseInt(counted+i));
        i--;
    }
    //4.JIKA TIDAK ADA ERROR
    else{
        runningCode(parseInt(counted+i));
        logout(parseInt(counted+i));
    }
}

function daily(){
    for(a=1; a<=100; a++){
        go(a);
    }
}

function monthly(){
    for(b=1; b<=30; b++){
        daily();
    }
}

monthly();