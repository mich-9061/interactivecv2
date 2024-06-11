package com.mich9061.interactivecv2.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.vaadin.flow.router.internal.RouteUtil;
import com.vaadin.flow.spring.security.VaadinWebSecurity;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends VaadinWebSecurity {
    
    // @Bean
	// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    //     http
	// 		.authorizeHttpRequests((authorize) -> authorize
	// 			.anyRequest().authenticated()
	// 		)
	// 		.httpBasic(Customizer.withDefaults())
	// 		.formLogin(Customizer.withDefaults());

	// 	return http.build();
	// }

    // @Bean
	// public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	// 	http
	// 		.authorizeHttpRequests(requests -> requests
	// 			.requestMatchers("/about").permitAll()
	// 			.anyRequest().authenticated()
	// 		)
	// 		.formLogin(form -> form
	// 			.loginPage("/login")
	// 			.permitAll()
	// 		)
	// 		.logout(LogoutConfigurer::permitAll);
	// 	return http.build();
	// }


	// hilla stays on top of Spring Security
	@Override
  	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeHttpRequests(requests -> requests
				.requestMatchers(new AntPathRequestMatcher("/about")).permitAll()
				// .anyRequest().authenticated()
			);
			// .formLogin(form -> form
			// 	.loginPage("/login")
			// 	.permitAll()
			// )
			// .logout(LogoutConfigurer::permitAll);
		super.configure(http);
		setLoginView(http, "/login", "/");
  	}

}
