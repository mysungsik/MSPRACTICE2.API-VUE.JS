const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',

            insertedText: "",
            insertedId:"",
            isLoading:false,

            todoList:[]
        }
    },
    methods:{
        async saveList(event){
            event.preventDefault();

            let inputId = this.insertedId
            if(this.insertedId){    //업데이트

                const response = await fetch(`http://localhost:3000/todo/` + inputId,{     // 주소는 todo/:id , id는 req.params.id
                    method:"PATCH",
                    body: JSON.stringify({
                        newtext : this.insertedText                               //text는 req.body.newtext
                    }),
                    headers:{
                        "Content-Type" : "application/json"
                    }
                }) 
                const responseData = await response.json();
                
                const index = this.todoList.findIndex(function( list ){
                    return list.id === inputId
                })
                this.todoList[index].text = responseData.updateTodo.text;
                this.insertedId=""

            } else{                 // 생성 ( + 서버에 넣기) API에 요청하여, 데이터를 DB에 넣어보자!

                const response = await fetch(`http://localhost:3000/todo`,{
                    method: "POST",
                    body: JSON.stringify({
                        text:this.insertedText,
                    }),
                    headers:{
                        "Content-type":"application/json"
                    }
                })
                const responseData = await response.json()
                const todoId = responseData.createdTodo.id  // API 에서 "createdTodo" 로 주기 때문에

                const inpuData = {
                    text : this.insertedText,
                    id: todoId
                }
                this.todoList.push(inpuData) 
            }
            this.insertedText=""
        },

        // 함수에 파라미터를 붙여서 사용할 수도 있다.
        // 무한증식 버튼의 경우, 각 요소의 id 값을 연결할 주요 기능이 되겠다.

        editList(idForEdit){
           
            this.insertedId = idForEdit                                             // 1. 파라미터를 통해, 리스트 안의 id를 빼오고        
            let inputId = this.insertedId                                           // 2. 함수안의 매서드에서는 this가안되서(VUE특징) 미리빼두고          
            const sameIDIndex = this.todoList.findIndex(function(item){             // 3. 리스트안의 ID와, 내 데이터속 ID가 같은 인덱스를 찾아
                return item.id == inputId
            })        
            this.insertedText =this.todoList[sameIDIndex].text                      // 4. 그 인덱스로, 텍스트 위로 다시 올리고
        },

        async deleteList(idForDelete){

            this.todoList = this.todoList.filter(function(list){
                return list.id !== idForDelete
            })

            const response = await fetch(`http://localhost:3000/todo/`+ idForDelete,{
                method: "DELETE"
            })
        }
    },
    async created(){    // 라이프 사이클 메서드를 통해, 시작하자마자, API를 통해, 데이터를 요청해, 가져와보자

        this.isLoading = true;                                       // 라이프사이클메서드는, 데이터를 전부 받아올때까지 기다리지 않아! => 로딩문구만들기
        const response = await fetch("http://localhost:3000/todo") 
        const responseData = await response.json()

        this.isLoading = false;
        this.todoList = responseData.todos      // API 에서 "todos" 로 주기 때문에
    }

}).mount('#todo-main')