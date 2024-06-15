package com.mich9061.interactivecv2.controller;

import java.security.Principal;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.mich9061.interactivecv2.security.SecurityService;
import com.vaadin.flow.server.VaadinRequest;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import jakarta.validation.constraints.NotNull;

@BrowserCallable
@AnonymousAllowed
public class LoginController {

    // private final AuthenticationManager authenticationManager;

    // LoginController(AuthenticationManager authenticationManager) {
    //     this.authenticationManager = authenticationManager;
    // }

    private SecurityService securityService;

    public String login(@NotNull String username, @NotNull String password, @NotNull String slug) {
        try {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (passwordEncoder.matches(password, userDetails.getPassword())) {
                securityService.setContext(username, password);
                return "/resume/" + slug;
            } else {
                return "Invalid username or password";
            }
        } catch (AuthenticationException e) {
            return "LoginError: " + e;
        }
    }

    // @GetMapping("/login")
    // public String login() {
    //     return "login"; // Questa dovrebbe essere la tua pagina di login React
    // }

    
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    public LoginController(AuthenticationManager authenticationManager, UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDetails getAuthenticatedUser() {
        Principal name = VaadinRequest.getCurrent().getUserPrincipal();
        System.out.println();
        System.out.println();
        System.out.println(name);
        System.out.println();
        System.out.println();
        SecurityContext context = SecurityContextHolder.getContext();
        Object principal = context.getAuthentication().getPrincipal();
        if (principal instanceof UserDetails) {
            return (UserDetails) principal;
        }
        throw new AccessDeniedException("User is not authenticated");
    }


    // public ResponseEntity<String> login(String username, String password, String slug) {
    //     try {
    //         UserDetails userDetails = userDetailsService.loadUserByUsername(username);

    //         if (passwordEncoder.matches(password, userDetails.getPassword())) {
    //             Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    //             SecurityContextHolder.getContext().setAuthentication(authentication);

    //             if (slug != null && !slug.isEmpty()) {
    //                 return ResponseEntity.ok("resume/" + slug);
    //             } else {
    //                 return ResponseEntity.badRequest().body("Slug cannot be empty");
    //             }
    //         } else {
    //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    //         }
    //     } catch (AuthenticationException e) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("LoginError: " + e.getMessage());
    //     }
    // }

}

