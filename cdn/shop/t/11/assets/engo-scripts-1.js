jQuery(document).ready(function($2){jQuery(".engoj_select_color a").each(function(){jQuery(this).on("mouseover",function(){var engoImage=jQuery(this).data("engojvariant-img");return jQuery(this).parents(".engoj_grid_parent").find(".engoj_find_img img").attr({src:engoImage}),!1})}),$2(".js-qty__adjust","#engoj_cart_form").on("click",function(){$2("#engoj_cart_form").submit()})}),jQuery(document).ready(function($2){$2.fn.ENGO_CountDown=function(options){return this.each(function(){new $2.ENGO_CountDown(this,options)})},$2.ENGO_CountDown=function(obj,options){var ddiff,gsecs;if(this.options=$2.extend({autoStart:!0,LeadingZero:!0,DisplayFormat:"<div><span>%%D%%</span> Days</div><div><span>%%H%%</span> Hours</div><div><span>%%M%%</span> Mins</div><div><span>%%S%%</span> Secs</div>",FinishMessage:"",CountActive:!0,TargetDate:null},options||{}),!(this.options.TargetDate==null||this.options.TargetDate=="")){this.timer=null,this.element=obj,this.CountStepper=-1,this.CountStepper=Math.ceil(this.CountStepper),this.SetTimeOutPeriod=(Math.abs(this.CountStepper)-1)*1e3+990;var dthen=new Date(this.options.TargetDate),dnow=new Date;this.CountStepper>0?ddiff=new Date(dnow-dthen):ddiff=new Date(dthen-dnow),gsecs=Math.floor(ddiff.valueOf()/1e3),this.CountBack(gsecs,this)}},$2.ENGO_CountDown.fn=$2.ENGO_CountDown.prototype,$2.ENGO_CountDown.fn.extend=$2.ENGO_CountDown.extend=$2.extend,$2.ENGO_CountDown.fn.extend({calculateDate:function(secs,num1,num2){var s=(Math.floor(secs/num1)%num2).toString();return this.options.LeadingZero&&s.length<2&&(s="0"+s),"<b>"+s+"</b>"},CountBack:function(secs,self){var DisplayStr;if(secs<0){self.element.innerHTML='<div class="label"> '+self.options.FinishMessage+"</div>";return}clearInterval(self.timer),DisplayStr=self.options.DisplayFormat.replace(/%%D%%/g,self.calculateDate(secs,86400,1e5)),DisplayStr=DisplayStr.replace(/%%H%%/g,self.calculateDate(secs,3600,24)),DisplayStr=DisplayStr.replace(/%%M%%/g,self.calculateDate(secs,60,60)),DisplayStr=DisplayStr.replace(/%%S%%/g,self.calculateDate(secs,1,60)),self.element.innerHTML=DisplayStr,self.options.CountActive&&(self.timer=null,self.timer=setTimeout(function(){self.CountBack(secs+self.CountStepper,self)},self.SetTimeOutPeriod))}});function init_countdown(){$2('[data-countdown="countdown"]').each(function(index,el){var $this=$2(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:'<li><span><i class="fa fa-clock-o"></i></span></li><li><span>%%D%% :</span></li><li><span>%%H%% :</span></li><li><span>%%M%% :</span></li><li><span>%%S%%</span></li>',FinishMessage:""})}),$2('[data-countdown="engoj_product_countdown"]').each(function(index,el){var $this=$2(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<div class=\"countdown-times\"><div class=\"day distance\"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class=\"hours distance\"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class=\"minutes distance\"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class=\"seconds distance\"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>",FinishMessage:""})}),$2('[data-countdown="engoj_countdown"]').each(function(index,el){var $this=$2(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<span><strong>%%D%%</strong> <br> days</span> <span><strong>%%H%%</strong> <br> hours</span> <span><strong>%%M%%</strong> <br> minutes</span> <span><strong>%%S%%</strong> <br> seconds</span>",FinishMessage:""})}),$2('[data-countdown="engoj_campaign_countdown"]').each(function(index,el){var $this=$2(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:"<span><strong>%%D%%</strong> <br> days</span> <span><strong>%%H%%</strong> <br> hours</span> <span><strong>%%M%%</strong> <br> minutes</span> <span><strong>%%S%%</strong> <br> seconds</span>",FinishMessage:""})}),$2('[data-countdown="engoj_cta_countdown"]').each(function(index,el){var $this=$2(this),$date=$this.data("date").split("-");$this.ENGO_CountDown({TargetDate:$date[0]+"/"+$date[1]+"/"+$date[2]+" "+$date[3]+":"+$date[4]+":"+$date[5],DisplayFormat:'<span class="countdown-row countdown-show4"><span class="countdown-section"><span class="countdown-amount">%%D%%</span><span class="countdown-period">Days</span></span><span class="countdown-section"><span class="countdown-amount">%%H%%</span><span class="countdown-period">Hours</span></span><span class="countdown-section"><span class="countdown-amount">%%M%%</span><span class="countdown-period">Minutes</span></span><span class="countdown-section"><span class="countdown-amount">%%S%%</span><span class="countdown-period">Seconds</span></span></span>',FinishMessage:""})})}init_countdown()}),function($2){"use strict";init_backtotop();function init_backtotop(){$2("body").append('<div id="engo_backtotop"><i class="fa fa-long-arrow-up" aria-hidden="true"></i></div>');var $backtotop=$2("#engo_backtotop");$backtotop.hide(),$2(window).scroll(function(){var heightbody=$2("body").outerHeight(),window_height=$2(window).outerHeight(),top_pos=heightbody/2-25;$2(window).scrollTop()+window_height/2>=top_pos?$backtotop.fadeIn():$backtotop.fadeOut()}),$backtotop.on("click",function(e){e.preventDefault(),$2("html, body").animate({scrollTop:0},500)})}}(jQuery),jQuery(document).ready(function($2){$2("div:not(#productSearchResults)").click(function(){$2("#productSearchResults").hide()})}),!jQuery.cookie("brilliant_promotion")||jQuery.cookie("brilliant_promotion")==null?jQuery(window).load(function(){$("#engocj_hd_promotion").show(),jQuery("#engoj_close_promotion").click(function(e){e.preventDefault(),jQuery("#engocj_hd_promotion").hide(),jQuery.cookie("brilliant_promotion","1",{expires:1,path:"/",domain:""})})}):$("#engocj_hd_promotion").remove();
//# sourceMappingURL=/cdn/shop/t/11/assets/engo-scripts.js.map?v=114631538858840810611485153283
