show dbs

// ������ ���̽� ���
use local

//Ȯ��
db

//���� collection Ȯ��
show collections


// ������ ���� ���� �ʿ� ����
// ������ ���ؼ��� db.dropDatabase()

//DB ���� Ȯ��
db.stats();

// Ư�� �÷����� ����
db.startup_log.stats(); 

// mydb �����ͺ��̽� ����
use mydb

// ���� �����ͺ��̽� Ȯ��
db

// title�� First Post�� ������ ����
db.posts.insert({
	"title": "First Post"
})

// ��ť��Ʈ �˻�
// 1�� ���� �˻� : findeOne()
db.posts.findOne();

// ������ �ڹٽ�ũ��Ʈ ����̱� ������ �巡�׷� + Ctrl + Enter

// JSON ��ü �����
let post = {
          "tilte": "Second Post"
}
db.posts.save(post);
// save: ��ť��Ʈ�� _id �ʵ尡 ������
//           ->  ���� ������ �ȵǰ� ����
//           insert(����)


// ������ �� �� ����
post = db.posts.findOne();
post
// _id�� �����Ǿ� �ִ�
// mongoDB�� ��Ű���� ������ ���� �ʴ�.

post.createdAt  = new Date();
// save : ��ť��Ʈ��  _id �ʵ尡 ������
//             -> ���� ������ �ǰ� ����
//            update(����)
db.posts.save(post)