show dbs

// 데이터 베이스 사용
use local

//확인
db

//현재 collection 확인
show collections


// 생성을 위한 절차 필요 없고
// 삭제를 위해서는 db.dropDatabase()

//DB 상태 확인
db.stats();

// 특정 컬렉션의 정보
db.startup_log.stats(); 

// mydb 데이터베이스 선택
use mydb

// 선택 데이터베이스 확인
db

// title이 First Post인 문서를 삽입
db.posts.insert({
	"title": "First Post"
})

// 다큐먼트 검색
// 1개 문서 검색 : findeOne()
db.posts.findOne();

// 엔진이 자바스크립트 기반이기 때문에 드래그로 + Ctrl + Enter

// JSON 객체 만들기
let post = {
          "tilte": "Second Post"
}
db.posts.save(post);
// save: 다큐먼트에 _id 필드가 없으면
//           ->  현재 관리가 안되고 있음
//           insert(삽입)


// 문서를 한 개 선택
post = db.posts.findOne();
post
// _id가 설정되어 있다
// mongoDB는 스키마가 정해져 있지 않다.

post.createdAt  = new Date();
// save : 다큐먼트에  _id 필드가 있으면
//             -> 현재 관리가 되고 있음
//            update(갱신)
db.posts.save(post)