resource "docker_container" "jklawyers" {
  name  = "jklawyers-${var.tag}"
  image = "docker-registry.kabala.tech/jklawyers:${var.tag}"
  restart = "always"
  networks_advanced {
      name = "${var.app_network}"
  }

  labels {
    label = "traefik.enable"
    value = "true"
  }

  labels {
    label = "traefik.backend"
    value = "jklawyers-${var.tag}"
  }

  labels {
    label = "traefik.frontend.rule"
    value = "Host:${var.app_domain}"
  }

  labels {
    label = "traefik.protocol"
    value = "http"
  }

  labels {
    label = "traefik.port"
    value = "8000"
  }

  env = [
    "NODE_ENV=production"
  ]
}
