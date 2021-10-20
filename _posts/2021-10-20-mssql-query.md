---
title: "MSSQL 특정 테이블 카운트"
excerpt: "Table row count"

categories:
  - Development
tags:
  - Study
---





```
SELECT DISTINCT MAX(A.rows)

FROM SYSINDEXES AS A

         INNER JOIN SYSOBJECTS AS B ON A.id = B.id

WHERE B.type = 'U' and B.name = '테이블 명'
```