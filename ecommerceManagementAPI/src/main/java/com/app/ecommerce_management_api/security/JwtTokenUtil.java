package com.app.ecommerce_management_api.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serial;
import java.io.Serializable;
import java.security.Key;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.function.Function;
import java.util.logging.Logger;


@Component
public class JwtTokenUtil implements Serializable {

  @Serial
  private static final long serialVersionUID = -2550185165626007488L;
  public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;
  public static final long REFRESH_TOKEN_VALIDITY = 30 * 24 * 60 * 60; // 30 días

  private Key key = Keys.secretKeyFor(SignatureAlgorithm.HS512); // Genera una clave segura

  private static final Logger logger = Logger.getLogger(JwtTokenUtil.class.getName());

  public String getUsernameFromToken(String token) {
    return getClaimFromToken(token, Claims::getSubject);
  }

  public Date getExpirationDateFromToken(String token) {
    return getClaimFromToken(token, Claims::getExpiration);
  }

  public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
    final Claims claims = getAllClaimsFromToken(token);
    return claimsResolver.apply(claims);
  }

  private Claims getAllClaimsFromToken(String token) {
    return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
  }

  public Boolean isTokenExpired(String token) {
    final Date expiration = getExpirationDateFromToken(token);
    return expiration.before(new Date());
  }
  @SuppressWarnings("unchecked")
  private List<String> castToList(Object obj) {
    return (List<String>) obj;
  }

  public List<String> getRolesFromToken(String token) {
    Claims claims = getAllClaimsFromToken(token);
    return castToList(claims.get("roles"));
  }

  public String generateToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    claims.put("roles", List.copyOf(userDetails.getAuthorities().stream()
            .map(GrantedAuthority::getAuthority)
            .toList()));
    String token= doGenerateToken(claims, userDetails.getUsername(),JWT_TOKEN_VALIDITY);
    logTokenExpiration(token);
    return token;
  }

  public String generateRefreshToken(UserDetails userDetails) {
    Map<String, Object> claims = new HashMap<>();
    return doGenerateToken(claims, userDetails.getUsername(), REFRESH_TOKEN_VALIDITY);
  }

  private String doGenerateToken(Map<String, Object> claims, String subject, long validity) {
    return Jwts.builder().setClaims(claims).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
            .setExpiration(new Date(System.currentTimeMillis() + validity * 1000))
            .signWith(key).compact();
  }

  public Boolean validateToken(String token, UserDetails userDetails) {
    final String username = getUsernameFromToken(token);
    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
  }


  public void logTokenExpiration(String token) {
    Date expirationDate = getExpirationDateFromToken(token);
    SimpleDateFormat dateFormat = new SimpleDateFormat("dd 'de' MMMM 'de' yyyy 'a las' HH:mm:ss", new Locale("es", "ES"));
    String formattedDate = dateFormat.format(expirationDate);
    logger.severe("El access token expira a las: " + formattedDate);
  }
}
