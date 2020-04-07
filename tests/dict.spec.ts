import Dict from '../src/Dict';

const dict = new Dict();

test('create Dict', () => {
  const f = new Dict({
    type: [{
      title: '123',
      key: '123'
    }]
  });
  const type = f.getDict('type')[0];
  expect(type.title).toBe('123');
  expect(type.key).toBe('123')
});

test('getDict', () => {
  expect(() => dict.getDict('fasdfsdf')).toThrowError('词典fasdfsdf不存在')
});

test('addDict', () => {
  dict.addDict('bbb', [{title: 'bbb1', key: 'bbb1'}])
  expect(dict.getDict('bbb').length).toBe(1);
})

test('add dict override', () => {
  dict.addDict('ccc', [{title: 'ccc1', key: 'ccc2'}])
  expect(() => {
    return dict.addDict('ccc', [{title: 'ccc1', key: 'ccc1'}])
  }).toThrowError('ccc 词典已存在');
  dict.addDict('ccc', [{title: 'ccc2', key: 'ccc2'}], true);
  expect(dict.getDict('ccc')[0].title).toBe('ccc2');
})

test('getSelectOptions', () => {
  dict.addDict('select', [{title: '选项', key: '1'}]);
  expect(dict.getSelectOptions('select')[0].value).toBe('1')
})
test('getDictText', () => {
  dict.addDict('text', [{title: '文本', key: '2'}]);
  expect(dict.getDictText('text', '2')).toBe('文本')
})



