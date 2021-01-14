///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//VARIABEL HEAD
var version = "8970419";
var source = "users";
var coloumn = 8;
var folderDownload = "C:\\FirefoxPortable\\Data\\profile\\iMacros";
var urlDownload = "https://raw.githubusercontent.com/wildannss/clb/main";
var urlSubDownload = "colab";
var urlDataDownload = "data_users";
var counted = parseInt(window.prompt("Use number only"));
var jml = 3;
var serviceCap = "http://imacros2.2captcha.com";
//VARIABEL ERROR
var error1 = /RuntimeError: Can not locate element specified by selector "#gb>DIV>DIV>A"/g;
var error2 = /RuntimeError: element INPUT specified by ID:Email was not found/g;
var error3 = /RuntimeError: Can not locate element specified by selector "#accept"/g;
var error4 = /RuntimeError: element INPUT specified by ID:password was not found/g;
var error5  = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "A script on this page may be busy, or it may have stopped responding. You can stop the script now, open the script in the debugger, or let the script continue/g;
var error6 = /RuntimeError: Can not locate element specified by selector "#edit-account-list"/g;
var error7 = /RuntimeError: element INPUT specified by ID:identifierId was not found/g;
var error8 = /RuntimeError: Can not locate element specified by selector "#passwordNext>DIV>BUTTON"/g;
var error9 = /RuntimeError: Can not locate element specified by selector "#view_container>DIV>DIV>DIV/g;
var error10 = /RuntimeError: element INPUT specified by NAME:password was not found/g;
var error11 = /RuntimeError: element IMG specified by ID:captcha-img was not found/g;
var error12 = /RuntimeError: unhandled confirmEx dialog detected. Dialog message: "This page is asking you to confirm that you want to leave - data you have entered may not be saved."/g;
var error13  = /RuntimeError: Element A is not visible/g;
var error14 = /NS_ERROR_FILE_NOT_FOUND: Component returned failure code/g;
var error15 = /RuntimeError: Can not locate element specified by selector "#ok"/g;
var error16 = /RuntimeError: Can not locate element specified by selector "#signout"/g;
var reconnect = /Reconnect/g;
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
    iimSet("urlDataDownload",urlDataDownload);
    iimSet("serviceCap",serviceCap);
    iimSet("counted",counted);
    iimSet("jml",jml);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//KEEP RUNNING
function keepRun(){
    for(j=1; j<=6; j++){
        var kiprun = iimGetErrorText(iimPlay("colab/keep"));
        if(error15.test(kiprun) === true){
            iimPlayCode("WAIT SECONDS=15");
            var cek = iimGetErrorText(iimPlayCode("EVENT TYPE=CLICK SELECTOR=\"#gb>DIV>DIV>A\" BUTTON=0"));
            if(error1.test(cek)){
                iimPlayCode("WAIT SECONDS=15");
            };
        }
        else if(error15.test(kiprun) === false){
            j += 6;
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LOGOUT
function logout(){
    if(error16.test(iimGetErrorText(iimPlay("colab/logout")))){
        if(error15.test(iimPlay("colab/logout_f"))){
            iimPlay("colab/logout_new")
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//RUNNING CODE
function go(){
    // for(a=1; a<=jml; a++){
        for(b=1; b<=jml; b++){
            //UPDATE DATASOURCE
            head();
            iimSet("loop",b);
            var run0 = iimGetErrorText(iimPlay("colab/data"));
            //JIKA ADA WARNING STAY PAGE
            if(error12.test(run0)){
                head();
                iimSet("loop",b);
                iimPlay("colab/logout_f");
            }
            /////////////UPDATE SCRIPT/////////////
            head();
            iimSet("loop",b);
            iimPlay("colab/update");
            ///////////////////////////////////////

            //LOGIN NEW
            head();
            iimSet("loop",b);
            var run1 = iimGetErrorText(iimPlay("colab/login_new"));
            if(error7.test(run1)){
                //LOGIN DEL NEW
                head();
                iimSet("loop",b);
                var run2 = iimGetErrorText(iimPlay("colab/login_del_new"));
                if(error9.test(run2)){
                    //LOGIN
                    head();
                    iimSet("loop",b);
                    var run3 = iimGetErrorText(iimPlay("colab/login"));
                    if(error2.test(run3)){
                        //LOGIN DEL
                        head();
                        iimSet("loop",b);
                        var run4 = iimGetErrorText(iimPlay("colab/login_del"));
                        //CAPTCHA
                        if(error4.test(run4)){
                            head();
                            iimSet("loop",b);
                            var run5 = iimGetErrorText(iimPlay("colab/captcha"));
                            //BELUM LOGOUT
                            if(error3.test(run5)){
                                logout();
                            }
                            //RUNNING CODE
                            else if(error15.test(run5)){
                                keepRun();
                                logout();
                            }
                        }
                        //BELUM LOGOUT
                        else if(error3.test(run4)){
                            logout();
                        }
                        //RUNNING CODE
                        else if(error15.test(run4)){
                            keepRun();
                            logout();
                        }
                    }
                    //CAPTCHA
                    else if(error4.test(run3)){
                        head();
                        iimSet("loop",b);
                        var run6 = iimGetErrorText(iimPlay("colab/captcha"));
                        //BELUM LOGOUT
                        if(error3.test(run6)){
                            logout();
                        }
                        //RUNNING CODE
                        else if(error15.test(run6)){
                            keepRun();
                            logout();
                        }
                    }
                    //BELUM LOGOUT
                    else if(error3.test(run3)){
                        logout();
                    }
                    //RUNNING CODE
                    else if(error15.test(run3)){
                        keepRun();
                        logout();
                    }
                }
                //CAPTCHA NEW
                else if(error10.test(run2)){
                    head();
                    iimSet("loop",b);
                    var run7 = iimGetErrorText(iimPlay("colab/captcha_new"));
                    //BELUM LOGOUT
                    if(error3.test(run7)){
                        logout();
                    }
                    //RUNNING CODE
                    else if(error15.test(run7)){
                        keepRun();
                        logout();
                    }
                }
                //BELUM LOGOUT
                else if(error3.test(run2)){
                    logout();
                }
                //RUNNING CODE
                else if(error15.test(run2)){
                    keepRun();
                    logout();
                }
            }
            //CAPTCHA NEW
            else if(error10.test(run1)){
                head();
                iimSet("loop",b);
                var run8 = iimGetErrorText(iimPlay("colab/captcha_new"));
                //BELUM LOGOUT
                if(error3.test(run8)){
                    logout();
                }
                //RUNNING CODE
                else if(error15.test(run8)){
                    keepRun();
                    logout();
                }
            }
            //BELUM LOGOUT
            else if(error3.test(run1)){
                logout();
            }
            //RUNNING CODE
            else if(error15.test(run1)){
                keepRun();
                logout();
            }
        }
    // }
}

go();