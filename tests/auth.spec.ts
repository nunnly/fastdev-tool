import Auth from '../src/Auth';

const auth = new Auth({
  roles: {
    'a.b.c': true
  },
  prefix: '.'
});

test('auth getRoles', () => {
  expect(auth.getRoles('abc')).toContain('abc');
  expect(auth.getRoles(['abc'])).toContain('abc');
})


test('auth addRoles', () => {
  auth.addRoles({
    'a.b': true,
    'a.c.d': true
  });
  expect(auth.roles.get('a.b')).toBe(true);
});

test('auth some', () => {
  expect(auth.some(['a.b', 'a.d'])).toBe(true);
});

test('auth every', () => {
  expect(auth.every(['a.b', 'a.d'])).toBe(false);
  expect(auth.every(['a.b','a.c.d'])).toBe(true);
});

test('auth contains',() => {
  expect(auth.contains(['a.c.d.f'])).toBe(true);
  expect(auth.contains(['a.c'])).toBe(false);
  expect(auth.contains(['a.c.d'])).toBe(true);
});

test('auth removeRoles',() => {
  auth.removeRoles('a.b');
  expect(auth.roles.get('a.b')).toBe(undefined)
})



// test('auth')


