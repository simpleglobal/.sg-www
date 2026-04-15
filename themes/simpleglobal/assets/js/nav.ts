// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', (): void => {
  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const links = document.querySelector<HTMLElement>('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', (): void => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
    });

    links.querySelectorAll<HTMLAnchorElement>('a').forEach((link): void => {
      link.addEventListener('click', (): void => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Language switcher and login dropdown
((): void => {
  const langToggle = document.querySelector<HTMLButtonElement>('.lang-toggle');
  const langMenu = document.querySelector<HTMLElement>('.lang-menu');
  const loginToggle = document.querySelector<HTMLButtonElement>('.login-btn');
  const loginMenu = document.querySelector<HTMLElement>('.login-menu');

  const closeLang = (): void => {
    langMenu?.classList.remove('open');
    langToggle?.setAttribute('aria-expanded', 'false');
  };

  const closeLogin = (): void => {
    loginMenu?.classList.remove('open');
    loginToggle?.setAttribute('aria-expanded', 'false');
  };

  if (langToggle && langMenu) {
    langToggle.addEventListener('click', (e: Event): void => {
      e.stopPropagation();
      closeLogin();
      const expanded = langToggle.getAttribute('aria-expanded') === 'true';
      langToggle.setAttribute('aria-expanded', String(!expanded));
      langMenu.classList.toggle('open');
    });
  }

  if (loginToggle && loginMenu) {
    loginToggle.addEventListener('click', (e: Event): void => {
      e.stopPropagation();
      closeLang();
      const expanded = loginToggle.getAttribute('aria-expanded') === 'true';
      loginToggle.setAttribute('aria-expanded', String(!expanded));
      loginMenu.classList.toggle('open');
    });

    loginMenu.addEventListener('click', (e: Event): void => {
      e.stopPropagation();
    });
  }

  document.addEventListener('click', (): void => {
    closeLang();
    closeLogin();
  });
})();

// Login state management
((): void => {
  const stateEmail = document.querySelector<HTMLElement>('.login-state-email');
  const stateSent = document.querySelector<HTMLElement>('.login-state-sent');
  const stateSignedIn = document.querySelector<HTMLElement>('.login-state-signed-in');
  const form = document.querySelector<HTMLFormElement>('#login-form');
  const emailInput = document.querySelector<HTMLInputElement>('#login-email');
  const sentEmail = document.querySelector<HTMLElement>('#login-sent-email');
  const backBtn = document.querySelector<HTMLButtonElement>('#login-back');
  const signoutBtn = document.querySelector<HTMLButtonElement>('#login-signout');
  const userEmail = document.querySelector<HTMLElement>('#login-user-email');
  const loginStatus = document.querySelector<HTMLElement>('#login-status');

  if (!stateEmail || !stateSent || !stateSignedIn) return;

  const setLoggedIn = (active: boolean): void => {
    if (loginStatus) {
      loginStatus.classList.toggle('active', active);
      loginStatus.textContent = active ? '✓' : '✗';
    }
  };

  const showState = (state: 'email' | 'sent' | 'signed-in'): void => {
    stateEmail.hidden = state !== 'email';
    stateSent.hidden = state !== 'sent';
    stateSignedIn.hidden = state !== 'signed-in';
    setLoggedIn(state === 'signed-in');
  };

  // Restore session on load
  const stored = localStorage.getItem('login-email');
  if (stored && userEmail) {
    userEmail.textContent = stored;
    showState('signed-in');
  }

  // Submit email — show confirmation briefly, then log in
  form?.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    const email = emailInput?.value.trim();
    if (!email) return;

    // Show "check your email" briefly
    if (sentEmail) sentEmail.textContent = email;
    showState('sent');

    // Simulate link acceptance after a short delay
    setTimeout((): void => {
      localStorage.setItem('login-email', email);
      if (userEmail) userEmail.textContent = email;
      showState('signed-in');
    }, 1500);
  });

  // Back to email entry
  backBtn?.addEventListener('click', (): void => {
    showState('email');
    emailInput?.focus();
  });

  // Sign out
  signoutBtn?.addEventListener('click', (): void => {
    localStorage.removeItem('login-email');
    if (emailInput) emailInput.value = '';
    showState('email');
  });
})();
