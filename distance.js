var metros = "m";
               
            AFRAME.registerComponent("foo1", { 
            init: function() {
              this.box = document.querySelector("#c1")
              this.text = document.querySelector("#t1")
              //console.log(caixa)
              //console.log(texto)
          },
            tick: function() {
              let camPos = this.el.object3D.position
              let boxPos = this.box.object3D.position
              this.text.setAttribute("value", (parseInt(camPos.distanceTo(boxPos)))+(metros))
              //console.log((parseInt(camPos.distanceTo(boxPos)))+(metros))
            }
          })
          
          AFRAME.registerComponent("foo2", {
            init: function() {
              this.box = document.querySelector("#c2")
              this.text = document.querySelector("#t2")
              //console.log(caixa)
              //console.log(texto)
          },
            tick: function() {
              let camPos = this.el.object3D.position
              let boxPos = this.box.object3D.position
              this.text.setAttribute("value", (parseInt(camPos.distanceTo(boxPos)))+(metros))
              //console.log((parseInt(camPos.distanceTo(boxPos)))+(metros))
            }
          })
          
          AFRAME.registerComponent("foo3", {
            init: function() {
              this.box = document.querySelector("#c3")
              this.text = document.querySelector("#t3")
              //console.log(caixa)
              //console.log(texto)
          },
            tick: function() {
              let camPos = this.el.object3D.position
              let boxPos = this.box.object3D.position
              this.text.setAttribute("value", (parseInt(camPos.distanceTo(boxPos)))+(metros))
              //console.log((parseInt(camPos.distanceTo(boxPos)))+(metros))
            }
          })
            