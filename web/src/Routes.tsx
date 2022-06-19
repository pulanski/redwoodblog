// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import AppShellLayout from 'src/layouts/AppShellLayout/AppShellLayout'
import PostsLayout from 'src/layouts/PostsLayout'

import { useAuth } from '@redwoodjs/auth'
import { Private, Route, Router, Set } from '@redwoodjs/router'
import UsersLayout from 'src/layouts/UsersLayout'

import { LanguageProvider } from './contexts/LanguageContext'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import BookmarksPage from './pages/BookmarksPage/BookmarksPage'
import CollectionPage from './pages/CollectionPage/CollectionPage'
import AdminShellLayout from './layouts/AdminShellLayout/AdminShellLayout'
import SettingsLayout from './layouts/SettingsLayout/SettingsLayout'
import GeneralSettingsPage from './pages/GeneralSettingsPage/GeneralSettingsPage'

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Router>
      <Route path="/form" page={FormPage} name="form" />
      <Set private unauthenticated="home" wrap={[AdminShellLayout]}>
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Set>
      </Set>
      <Route path={isAuthenticated ? '/landing' : '/'} page={LandingPage} name="landing" />
      <Set wrap={AppShellLayout}>
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      </Set>
      <Set private wrap={AppShellLayout} unauthenticated="signup">
        <Route path="/collection" page={CollectionPage} name="collection" />
        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/create" page={CreatePostPage} name="create" />
      </Set>
      {/* Content unauthenticated user can access */}
      <Set wrap={[AppShellLayout, LanguageProvider]}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/home" page={HomePage} name="home" />
        {isAuthenticated && <Route path="/" page={HomePage} name="home" />}
        <Route notfound page={NotFoundPage} />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      {/* All settings */}
      <Set wrap={[SettingsLayout]}>
        <Route path="/settings/general" page={GeneralSettingsPage} name="generalSettings" />
        <Private unauthenticated="signup">
          <Route path="/settings/account" page={AccountSettingsPage} name="accountSettings" />
        </Private>
      </Set>
    </Router>
  )
}

export default Routes
