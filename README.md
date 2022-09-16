# vue-test4
new

# backend : node express
npm install express-generator -g
express --view=pug [이름] // backend
# frontend
vue 3.0.4
vue-cli 5.0.8
webpack 4.46.0

# vue-cli 설치
npm install -g @vue/cli

# 버전 확인
vue --version

# project 생성
vue create [이름] // frontend
- vue 3 버전 권장

# 로컬 서버에서 실행
cd [이름]
npm run serve

# git
원격 저장소 목록 조회
git remote -v

원격 저장소 추가 
git remote add origin [추가할 원격 git 저장소 주소]

CLI 이용한 commit / push
git add .
git commit -m "커밋메시지"
git push origin master

(( error: failed to push some refs to 'https://github.com/bbeee21/vue-test4.git' )) push 할때 에러 해결 방법은?

원격 저장소 그대로 두고 추가하는 법
git remote add second [추가할 원격 git 저장소 주소]

기존 원격 저장소 이름을 old-origin 으로 변경하고 origin으로 추가하는 방법
cd existing_repo
git remote rename origin old-origin
git remote add origin [추가할 원격 git 저장소 주소]
git push -u origin --all
git push -u origin --tags

기존 원격저장소를 삭제하고 새로 추가하는 방법
git remote remove origin
git remote add origin [추가할 원격 git 저장소 주소]
