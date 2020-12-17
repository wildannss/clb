///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users.csv";
var coloumn = 5;
var folderDownload = "D:\\Downloads\\Server\\Windows\\Installer\\Colab\\FirefoxPortable\\Data\\profile\\iMacros";
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
//KEEP RUNNING
function keepRun(i){
    for(w=1; w<=5; w++){
        iimPlayCode("WAIT SECONDS=1");
        iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#runtime-menu-button>DIV>DIV>DIV\" BUTTON=0");
        iimPlayCode("WAIT SECONDS=2");
        iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#\\:1v>DIV\" BUTTON=0");
        iimPlayCode("WAIT SECONDS=5");
        var keep = iimGetErrorText(iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#ok\" BUTTON=0"));
        if(error15.test(keep)){
            iimPlayCode("WAIT SECONDS=60");
        }
        else{
            iimPlayCode("WAIT SECONDS=60");
        }
    }
    head();
    iimSet("loop",i);
    var out = iimGetErrorText(iimPlayCode("colab/logout_f"));
    if(error15.test(out)){
        iimPlayCode("WAIT SECONDS=5");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUNNING CODE
function go(){
    for(b=1; b<=3000; b++){
        //UPDATE DATASOURCE
        head();
        iimSet("loop",parseInt(counted+b));
        var run0 = iimGetErrorText(iimPlay("colab/data"));
        //JIKA ADA WARNING STAY PAGE
        if(error12.test(run0)){
            iimPlay("colab/logout_f");
        }
        //UPDATE SCRIPT
        head();
        iimSet("loop",parseInt(counted+b));
        iimPlay("colab/update");
        //LOGIN
        head();
        iimSet("loop",parseInt(counted+b));
        var run1 = iimGetErrorText(iimPlay("colab/login"));
        //JIKA BELUM LOGOUT
        if(error1.test(run1)){
            head();
            iimSet("loop",parseInt(counted+b));
            var run_a = iimGetErrorText(iimPlay("colab/logout_f"));
            if(error15.test(run_a)){
                head();
                iimSet("loop",parseInt(counted+b));
                iimPlay("colab/logout");
            }
        }
        //LOGIN NORMAL DEL USER
        else if(error2.test(run1)){
            head();
            iimSet("loop",parseInt(counted+b));
            var run2 = iimGetErrorText(iimPlay("colab/login_del"));
            //LOGIN NEW DEL USER
            if(error6.test(run2)){
                head();
                iimSet("loop",parseInt(counted+b));
                var run3 = iimGetErrorText(iimPlay("colab/login_del_new"));
                //LOGIN NEW
                if(error9.test(run3)){
                    head();
                    iimSet("loop",parseInt(counted+b));
                    var run4 = iimGetErrorText(iimPlay("colab/login_new"));
                    ////////////////
                    ////CAPTCHA////
                    if(error10.test(run4)){
                        head();
                        iimSet("loop",parseInt(counted+b));
                        var run_y = iimGetErrorText(iimPlay("colab/captcha_new"));
                        //JIKA SUDAH PERNAH LOGIN
                        if(error3.test(run_y)){
                            head();
                            iimSet("loop",parseInt(counted+b));
                            iimPlay("colab/logout");
                        }
                    }
                    //JIKA SUDAH PERNAH LOGIN
                    else if(error3.test(run4)){
                        head();
                        iimSet("loop",parseInt(counted+b));
                        iimPlay("colab/logout");
                    }
                    /////////////////
                }
                ////////////////
                ////CAPTCHA////
                else if(error10.test(run3)){
                    head();
                    iimSet("loop",parseInt(counted+b));
                    var run_z = iimGetErrorText(iimPlay("colab/captcha_new"));
                    //JIKA SUDAH PERNAH LOGIN
                    if(error3.test(run_z)){
                        head();
                        iimSet("loop",parseInt(counted+b));
                        iimPlay("colab/logout");
                    }
                }
                //JIKA SUDAH PERNAH LOGIN
                else if(error3.test(run3)){
                    head();
                    iimSet("loop",parseInt(counted+b));
                    iimPlay("colab/logout");
                }
                /////////////////
            }
            ////////////////
            ////CAPTCHA////
            else if(error4.test(run2)){
                head();
                iimSet("loop",parseInt(counted+b));
                var run_w = iimGetErrorText(iimPlay("colab/captcha"));
                //JIKA SUDAH PERNAH LOGIN
                if(error3.test(run_w)){
                    head();
                    iimSet("loop",parseInt(counted+b));
                    iimPlay("colab/logout");
                }
            }
            //JIKA SUDAH PERNAH LOGIN
            else if(error3.test(run2)){
                head();
                iimSet("loop",parseInt(counted+b));
                iimPlay("colab/logout");
            }
            /////////////////
        }
        ////CAPTCHA////
        else if(error4.test(run1)){
            head();
            iimSet("loop",parseInt(counted+b));
            var run_x = iimGetErrorText(iimPlay("colab/captcha"));
            //JIKA SUDAH PERNAH LOGIN
            if(error3.test(run_x)){
                head();
                iimSet("loop",parseInt(counted+b));
                iimPlay("colab/logout");
            }
        }
        //JIKA SUDAH PERNAH LOGIN
        else if(error3.test(run1)){
            head();
            iimSet("loop",parseInt(counted+b));
            iimPlay("colab/logout");
            b--;
        }
    }
}

go();