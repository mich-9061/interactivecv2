package com.mich9061.interactivecv2.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.vaadin.flow.router.internal.RouteUtil;
import com.vaadin.flow.spring.security.VaadinWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends VaadinWebSecurity{
    
	@Value("${spring.security.user.name}")
    private String username;

    @Value("${spring.security.user.password}")
    private String password;

    @Value("${spring.security.user.roles}")
    private String roles;
// *****
	// vaadin stays on top of Spring Security
	@Override
  	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests(requests -> requests
				.requestMatchers(new AntPathRequestMatcher("/about")).permitAll()
				// .requestMatchers(new AntPathRequestMatcher("/resume/gmandolino")).permitAll()
			// )
			// .formLogin(form -> form
			// 	.loginPage("/login")
			// 	.permitAll()
			// )
			// .logout(LogoutConfigurer::permitAll
			);
		
		super.configure(http);
		setLoginView(http, "/login");
  	}

	// @Bean
    // public UserDetailsManager   () {
    //     UserDetails user =
    //             User.withUsername(username)
    //                     .password(password)
    //                     .roles(roles)
    //                     .build();
    //     return new InMemoryUserDetailsManager(user);
    // }
// *****fino a qui almeno prende la pagina di login ed esclude le altre

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

	@Bean
    public     userDetailsService() {
        UserDetails user = User.withUsername(username)
                .password(passwordEncoder().encode(password))
                .roles(roles)
                .build();
        return new InMemoryUserDetailsManager(user);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
