///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users.csv";
var coloumn = 5;
var counted = parseInt(window.prompt("What VPS counted?\n\np.s: just number"));
var row = counted;
var folderDownload = "D:\Downloads\Server\Windows\Installer\Colab\FirefoxPortable\Data\profile\iMacros";
var urlDownload = "https://raw.githubusercontent.com/wildannss/clb/main";
var urlSubDownload = "colab";
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
    iimSet("counted",counted);
    iimSet("folderDownload",folderDownload);
    iimSet("urlDownload",urlDownload);
    iimSet("urlSubDownload",urlSubDownload);
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
    for(r=1; r<=10; r++){
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
function dataSource(idat){
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

//UPDATE DATA SOURCE
dataSource(i);
for(i=1; i<=1; i++){
    //UPDATE SCRIPT
    upScript(i)
    //1.LOGIN TANPA USER FORM BARU
    head();
    iimSet("loop",i);
    var run1 = iimGetErrorText(iimPlay("colab/login_new"));

    //2.JIKA BELUM LOGOUT
    if(error1.test(run1)){
        logout(i)
        i--;
    }

    //3.JIKA LOGIN ADA USER FORM BARU
    else if(error7.test(run1)){
        head();
        iimSet("loop",i);
        var run2 = iimGetErrorText(iimPlay("colab/login_del_new"));
        //3.a.JIKA SUDAH PERNAH LOGIN
        if(error3.test(run2)){
            logout(i);
        }
        //3.b.JIKA LOGIN ADA USER FORM LAMA
        else if(error9.test(run2)){
            head();
            iimSet("loop",i);
            var run3 = iimGetErrorText(iimPlay("colab/login_del"));
            //3.b.1.JIKA SUDAH PERNAH LOGIN
            if(error3.test(run3)){
                logout(i);
            }
            //3.b.2.JIKA LOGIN TANPA USER FORM LAMA
            else if(error6.test(run3)){
                head();
                iimSet("loop",i);
                var run4 = iimGetErrorText(iimPlay("colab/login"));                    
                //3.b.2.1.JIKA SUDAH PERNAH LOGIN
                if(error3.test(run4)){
                    logout(i);
                }
                else if(error4.test(run4)){
                    ////CAPCTHA////
                    head();
                    iimSet("loop",i);
                    iimPlay("colab/captcha")
                    ////CAPCTHA////
                }
            }
        }
    }
    runningCode(i);
}