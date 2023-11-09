import { render, screen } from '@testing-library/react';
import { Header } from '..';

jest.mock('next/navigation', () => ({
  usePathname: () => '/test',
}));
jest.mock('../../Avatar', () => ({
  Avatar: () => <p>Avatar</p>,
}));
jest.mock('../../AvatarContainer', () => ({
  AvatarContainer: (props: object) => <p {...props}>AvatarContainer</p>,
}));
jest.mock('../../MobileNavigation', () => ({
  MobileNavigation: () => <p>MobileNavigation</p>,
}));
jest.mock('../../DesktopNavigation', () => ({
  DesktopNavigation: () => <p>DesktopNavigation</p>,
}));

it('Header matches snapshot (non-homepage) (regression test)', () => {
  render(<Header />);
  expect(screen.getByTestId('Header')).toMatchSnapshot(
    'Full component snapshot.',
  );
});

it("Header doesn't renders special avatar on non-homepage", () => {
  render(<Header />);

  expect(screen.queryByTestId('Header-home-avatar')).toBeNull();
  screen.getByTestId('Header-non-home-avatar');
});
