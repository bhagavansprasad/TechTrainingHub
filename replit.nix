
{pkgs}: {
  deps = [
    pkgs.haskellPackages.ssh
    pkgs.openssh
  ];
}
