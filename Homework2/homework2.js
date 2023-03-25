let x='это';
switch (typeof(x)){
    case  'string':
        console.log(x + ' = X - строка');
        break;

    case 'boolean':
        console.log(x + ' = X - логический тип');
        break;

    case 'number':
        console.log(x + ' = X - число');
        break;
        default:
        console.log('Тип X не определен');
}