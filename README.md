# joljack-project

* pdfminer, olefile, docx, newspaper 라이브러리를 통해 파일과 링크로 기사를 입력받아 기사의 본문을 텍스트추출하고, mecab을 통해서 형태소 추출을 합니다. 
* 공공데이터인 openAPI로 허가된 건강기능식품들의 목록을 받아와 제품명을 추출하고, mysql 데이터베이스에 저장합니다. 
* 허위기사로 판별할 특정 문자열들이 기사에 있는지 조회하고, 여러 기사들에서 동시출현단어쌍을 만들어 신뢰도가 낮은 기사와 높은 기사에서 등장하는 동시출현단어를 저장합니다. 
* tf-idf로 저장한 기사들 중 유사도가 높은 기사들의 개수를 판별합니다. 
* 등록된 제품인지 금지된 제품인지 조회하고 동시출현단어, tf-idf 유사도, 허위과대광고문구를 따져서 신뢰도 점수를 측정합니다.

실행했을 때의 화면입니다.

### 1. 초기화면 페이지
![1 초기화면페이지](https://user-images.githubusercontent.com/97031387/161697796-5f29ecf3-6ec2-492e-9c93-a2825fbc73a7.PNG)

### 2. 이용안내 페이지
![2 이용안내페이지](https://user-images.githubusercontent.com/97031387/161698076-d5905e1a-c0b5-459f-a5d1-006c321e5631.PNG)

### 3. 파일첨부(파일)
![3 파일첨부(파일)](https://user-images.githubusercontent.com/97031387/161698090-eaaeb081-c7a8-4f8e-aa25-992b5dd01b48.PNG)

### 4. 파일첨부(링크)
![4 파일첨부(링크)](https://user-images.githubusercontent.com/97031387/161698105-5136de4c-cc00-480f-a2e3-6693302d4b79.PNG)

### 5. 결과화면 - 유사 기사 보이기
![5-1 결과화면(보이기)](https://user-images.githubusercontent.com/97031387/161698121-a6679aa9-d7a0-419b-bc0d-1bb75ba1a2f3.PNG)

### 6. 결과화면 - 유사 기사 숨기기
![5-1 결과화면(숨기기)](https://user-images.githubusercontent.com/97031387/161698128-b77bc91d-33b1-4b6f-8f5c-dc4d4e482d9f.PNG)

### 7. 결과화면 
![5 결과화면(green)](https://user-images.githubusercontent.com/97031387/161698152-16fb596e-ea04-467a-ba1d-34a5b9283378.PNG)
![5 결과화면(orange)](https://user-images.githubusercontent.com/97031387/161698165-f2842d51-cd4a-4bff-aa1f-2d434a619320.PNG)
![5 결과화면(red)](https://user-images.githubusercontent.com/97031387/161698173-d55d8513-6eef-4fe0-a28a-c50ad131f8ee.PNG)

### 8. 평가페이지
![6 평가페이지](https://user-images.githubusercontent.com/97031387/161698189-16f5f2ea-093e-441b-bad0-3c06f2d96db4.PNG)

### 9. 졸작 네비게이션
![졸작 네비](https://user-images.githubusercontent.com/97031387/161698204-624fe33c-f46e-4c52-9cc8-9be5adc24a26.PNG)


