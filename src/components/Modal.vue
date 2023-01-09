<template>
    <div class="modal fade" :id="modalKey" tabindex="-1" role="dialog" aria-labelledby="modalComponentTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content" :style="customStyles+calculatedStyles">
        <div class="modal-header">
          <button @click="closeModal()" type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <slot name="modal-header"/>
        </div>
        <div class="modal-body">
            <slot name="modal-body"/>
        </div>
        <div class="modal-footer mod-footer">
          <slot name="modal-footer"/>
          <div v-if="hasPrimaryButton && buttonLayout == 1" class="footer-buttons">
              <a href="#" @click="secondaryButtonAction ? secondaryButtonAction() : closeModal()" v-if="hasSecondaryButton" class="button secondary"> {{secondaryButtonTitle}} </a>
              <a href="#" @click="primaryButtonAction()" class="button primary" :style="[primaryButtonColor ? 'background-color:'+primaryButtonColor :'']"> {{primaryButtonTitle}} </a>
          </div>

          <div v-if="hasPrimaryButton && buttonLayout == 2" class="footer-buttons layout-2">
              <a href="#" @click="secondaryButtonAction ? secondaryButtonAction() : closeModal()" v-if="hasSecondaryButton" class="button secondary"> {{secondaryButtonTitle}} </a>
              <a href="#" @click="primaryButtonAction()" class="button primary" :style="[primaryButtonColor ? 'background-color:'+primaryButtonColor :'']"> {{primaryButtonTitle}} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { thisExpression } from '@babel/types';

    export default {
        name : "Modal",
        props : {
            title : String,
            modalKey : String,
            hasPrimaryButton : Boolean,
            primaryButtonTitle : String,
            primaryButtonAction : Function,
            primaryButtonColor : String,
            hasSecondaryButton : Boolean,
            secondaryButtonTitle : String,
            secondaryButtonAction : Function,
            buttonLayoutType : String,
            onSuccess : Function,
            onError : Function,
            customStyles : {
                type : String,
                default : ""
            },
        },
        data(){
            return {
              calculatedMargin : 0
            };
        },
        computed:{
          calculatedStyles(){
            return this.calculatedMargin ? `margin-left:${this.calculatedMargin}px;`:'margin: auto auto;';
          },
          buttonLayout(){
            return this.buttonLayoutType ?? 1;
          }
        },
        methods : {
          openModal(){
            $(`#${this.modalKey}`).modal('show');
          },
          closeModal(){
            $(`#${this.modalKey}`).modal('hide');
          },
          extractCustomStyle(property){
            var splitter = this.customStyles.trim().split(';');
            for(var i = 0; i< splitter.length;i++){
              var arrayPair = splitter[i].trim().split(':');
              if(arrayPair[0].trim() == property){
                //TO ADD MULTIPLE UNITS LATER
                return arrayPair[1].trim().replace('%','');
              }
            }
            return false;
          },
          
        },
        mounted(){
          var dashboardNav = document.getElementById('dashboard-navigation');
          var windowWidth = document.documentElement.offsetWidth;
          var modalWidth = this.extractCustomStyle('width') 
            ?  this.extractCustomStyle('width')*windowWidth/100 : windowWidth/2 ;
          if(dashboardNav){
            var remainingWidth = (windowWidth - dashboardNav.offsetWidth);
            var availablePaddingWidth = (remainingWidth-modalWidth)/2
            this.calculatedMargin = dashboardNav.offsetWidth + availablePaddingWidth
          }else{
            this.calculatedMargin = 0;
          }
        }
    }
</script>

<style lang="scss" scoped>
.modal-header{
  border-bottom: none !important;
  display: flex !important;
  flex-direction: row-reverse;
  padding: 0px;

  button{
    background-color: #FFFFFF;
    border: 0px;
    font-size: 26px;
  }
}

.modal-dialog{
    max-width: none;
}
.modal-content{
    padding: 20px;
    max-width: 50%;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(7, 4, 146, 0.1), 0px 24px 60px rgba(34, 47, 81, 0.05), 0px 12px 24px rgba(30, 42, 72, 0.05);
    border-radius: 4px;
    position: relative;
    bottom : 30px;
}

 .modal-body{
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    padding: 10px 0px;
}
.mod-footer{
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    justify-content: center ;
}
.modal-footer{
  border-top: none !important;
  padding-left: 0px;
  padding-right: 0px;

  .footer-buttons{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;

    .button{
      padding: 12px 20px;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      text-decoration: none;
    }

    .button.primary{
      border-radius: 2px;
      background-color: #05B050;
      color:#FFFFFF;
    }

    .button.secondary{
      color : black;
    }
  }

  .footer-buttons.layout-2{
    justify-content: space-between;
    gap: 10px;

    .button{
      flex :1;
      text-align: center;
    }

    .button.secondary{
      border: 1px solid black;
      border-radius: 2px;
    }
  }
}


</style>