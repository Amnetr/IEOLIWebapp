<template>
<div class="headline">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div id="rectrangle"></div>
            <h3 id="title">挑选任务进行标注&nbsp;&nbsp; </h3>

            <div class="prepanel">

                <div class="panel-group" id="accordion">

                    <c:forEach items="${list}" var="model" varStatus="status">

                        <div class="caption" align="left">
                            <input type="checkbox" name="task" value="${model.taskid}" checked>
                            <span style="font-size:25px;margin-right:2px;margin-bottom:3px;backgroundColor:#EEEEEE">任务：${model.taskdescription}</span>

                        </div>

                    </c:forEach>
                    <p align="center">
                        <a onclick="settask()" target="_blank" class="btn btn-info" role="button">选择</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="col-md-2"></div>
    </div>

</div>
</template>
<script>
export default {
  name: 'task',
  data () {

  }
}
</script>
<style scoped>
.container-fluid {
        background-color: lightgrey;
        opacity: 0.6;
    }

    .row {
        margin-top: -20px;
        height: 100vh;

    }

    .col-md-8 {
        box-shadow: 0px 6px 5px lightgrey inset;
        background: url(../assets/bg.png);
        height: 100vh;
        overflow-y: scroll;
    }

    #rectrangle {
        float: left;
        height: 35px;
        width: 6px;
        background-color: #1AA094;
        margin: 30px 7px 30px 30px;
    }

    #title {
        margin: 30px 30px 30px 7px;
        padding: 0px;
        font-family: "PingHei";
        font-size: 30px;
    }

    .btn {
        background-color: #1AA094;
        border: none;
    }

    .prepanel {
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 10px 20px 0px 20px;
    }

    #pretiltle {
        font-family: "PingHei";
        font-size: 20px;
        margin: 0px 10px 20px 10px;
    }
</style>
