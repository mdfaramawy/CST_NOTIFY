           function dataCheck(){
                
                let response_img = document.getElementById("response_img");
                let user_id = get('id');
                let input_url = 'https://thekey-dev.citc.gov.sa/workflow-backend-test/resources/NOTI/getAllCombinedNotifications?userName='+user_id;
                // alert ('USE iD: '+user_id );
                let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        if(this.status !== 200){
                            response_img.innerHTML = "<font color=white>You don't have new notifications !</font> ";
                            return;
                        }
                        let response = xhttp.responseText;
                        try{
                            response = JSON.parse(response);
                            let respCount = response.length;
                            if(respCount==0){
                                response_img.innerHTML="You don't have new Notification(s) !"
                            }  
                            else{
                                response_img.innerHTML="<font color=white>You have</font> <font color=red>("+respCount+")  new Notification(s) </font><font color=white>, <a href='https://fa-etnq-dev1-saasfaprod1.fa.ocs.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome?_adf.ctrl-state=xx' target='_parent'> click to view</a></font>";
                            }                          
                        }catch (Exception){
                            response_img.innerHTML = "<font color=white>You don't have new Notification(s) ! </font>";
                        }
                    }
                }
                xhttp.open("GET", input_url, true);
                xhttp.send();
            }
            function get(name){
                if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
                   return decodeURIComponent(name[1]);
             }