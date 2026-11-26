/* Add future labs here; paths are relative to the repository root. */
window.LAB_CATALOG = {
  sections: [
    {id:'word',name:'Word',description:'Текстовые документы',software:'Writer',icon:'file',color:'#2563EB'},
    {id:'excel',name:'Excel',description:'Электронные таблицы',software:'Calc',icon:'table',color:'#11B981'},
    {id:'powerpoint',name:'PowerPoint',description:'Мультимедийные презентации',software:'Impress',icon:'presentation',color:'#F59E45'},
    {id:'database',name:'Базы данных',description:'Хранение и обработка данных',software:'',icon:'database',color:'#7468F4'},
    {id:'ai',name:'Искусственный интеллект',description:'Промпты и проверка ответов',software:'',icon:'brain',color:'#F43F73'},
    {id:'other',name:'Дополнительные материалы',description:'Справочники и инструкции',software:'',icon:'library',color:'#64748b'}
  ],
  labs: [{id:'01',section:'word',title:'Создание и редактирование электронных документов',description:'Оформление и автоматизированное форматирование документов средствами текстового процессора (стили, автооглавление).',duration:90,variants:30,software:'OpenOffice Writer',team:'1–3 человека',assessment:'Зачёт / незачёт',version:'1.0',path:'Word/Лабораторная работа № 01',files:[{name:'Методические указания',file:'Методические указания.pdf',type:'PDF',description:'Задание и последовательность выполнения'},{name:'Шаблон отчёта',file:'Шаблон отчёта.odt',type:'ODT',description:'Документ для заполнения'},{name:'Редактируемая методичка',file:'Методические указания.odt',type:'ODT',description:'Альтернативный формат инструкции'}],variantDir:'Варианты заданий',variantPrefix:'Вариант ',variantExt:'.odt',skills:['Форматирование документа','Стили заголовков','Автоматическое оглавление','Составление и проверка промптов'],steps:['Прочитайте методические указания.','Получите номер варианта у преподавателя и скачайте исходный документ.','Выполните задание в Writer с использованием ИИ, проверяя его ответы.','Заполните отчёт и сдайте преподавателю итоговый документ и отчёт в формате ODT.'] }]
};
