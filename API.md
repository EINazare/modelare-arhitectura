|Request Type|Request Route|Request body|Request response|
|:----|:----|:----|:----|
|post|`/users/authenticate`|`{email, password}`|`{"_id":"...","email":"...","firstName":"...","lastName":"...","role":"...","createdDate":"...","__v":0,"token":"..."}`|
|get|`/users/teachers`|``|`[{"_id":"...","firstName":"...","lastName":"...","no_classes":"..."},...]`<br/> **Where `no_classes` is the number of classes tought by the teacher**|
|get|`/users/students`|``|`[{"_id":"...","firstName":"...","lastName":"...","class":"...","no_subjects":"...","no_grades":"...","average":"..."},...]`**<br/>Where `class` is the class where the student is enrolled<br/>Where `no_subjects` is the number of subjects tought in the `class`<br/>Where `no_grades` is the total number of grades of the student<br/>Where `average` is the average of grades**|
