<template>
  <main class="about-page">
    <div class="header">
      <h1>Adventure Skill</h1>
    </div>
    <div class="body">
      <p>Field Repairs</p>
      <div class="container">
        <div class="skill html">90%</div>
      </div>
      <p>Crowd Control</p>
      <div class="container">
        <div class="skill css">80%</div>
      </div>
      <p>Head Rush</p>
      <div class="container">
        <div class="skill js">50%</div>
      </div>
      <p>Busted Up</p>
      <div class="container">
        <div class="skill vue">30%</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.header {
    text-align: center;
    margin-top: 10px;
    }

    .body {
      box-sizing: border-box;

      p {
        margin-top: 10px;
      }

      .container {
        width: 100%;
        background-color: #ddd;
        border-radius: 10px;
        margin-top: 5px;
      }
      .skill {
          text-align: right;
          padding-top: 3px;
          padding-bottom: 3px;
          border-radius: 10px;
          color: white; 
          padding-right: 7px;  
        }
        .html {
          width: 90%;
          background-color:  #45fc6c;
        }

        .css {
          width: 80%;
          background-color:  #45fc6c;
        }

        .js {
          width: 50%;
          background-color:  #45fc6c;
        }

        .vue {
          width: 30%;
          background-color:  #45fc6c;
        }
    }
</style>